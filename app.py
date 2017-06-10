from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from easypeasy import query_pons_dictionary, extract_definitions, secret, query_spellchecker_service, cfg
import os
import re
from os import path

app = Flask(__name__)
CORS(app)
api = Api(app)


with open('wiki_grunwortschatz.txt') as f:
    common_words = {line.strip().lower(): None for line in f.readlines()}


class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')


class Definitions(Resource):
    def get(self, query):

        response = query_pons_dictionary(query=query, secret=secret)
        result = {}
        result['definition'] = list(extract_definitions(response.json()))[0]['definition']
        result['definition_url'] = 'http://de.pons.com/%C3%BCbersetzung?' + response.url.split('?')[1]
        return result

api.add_resource(Definitions, '/defs/<string:query>')



class WordResult:
    def __init__(self, word, problem, suggestions=[], definition='definition string', definition_url=''):
        self.word = word
        self.problem = problem
        self.suggestions = suggestions
        self.definition = definition
        self.definition_url = definition_url


class AnalyzeText(Resource):
    def post(self):

        problem_words = set()
        results = []
        text = request.json['text']

        # Spellcheck
        misspelled_words = query_spellchecker_service(text=text, port=cfg.spellchecker_port)


        for word in misspelled_words:
            if word not in problem_words:
                result = WordResult(word=word, suggestions=[], problem='SpellingError',
                                    definition='definition string',
                                    definition_url="http://de.pons.com/%C3%BCbersetzung?l=dedx&q=kind&in=de&language=de")
                problem_words.add(word)
                results.append(result.__dict__)


        # Check for existence in word list
        words = re.sub("[^\w]", " ", text).split() if text else []
        for word in words:
            if word not in problem_words:
                try:
                    common_words[word]
                except KeyError:
                    result = WordResult(word=word, suggestions=[], problem='NotFoundInCommonList',
                                        definition='definition string', definition_url="http://de.pons.com/%C3%BCbersetzung?l=dedx&q=kind&in=de&language=de")
                    problem_words.add(word)
                    results.append(result.__dict__)

        return results

# api.add_resource(AnalyzeText, '/analyze/<string:text>')
api.add_resource(AnalyzeText, '/analyze')


if __name__ == '__main__':
    app.run(debug=True, host=os.environ.get('HOST'), port=int(os.environ.get('PORT')))
