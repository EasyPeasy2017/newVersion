from flask import Flask, request, send_from_directory, render_template
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
<<<<<<< HEAD
from easypeasy import query_pons_dictionary, extract_definitions, secret, query_spellchecker_service, cfg
import os
=======
from easypeasy import query_pons_dictionary, extract_definitions, query_spellchecker_service, cfg
import os

secretkey = os.environ.get("DICT_SECRET_KEY")
>>>>>>> fe64a98a36311ce6b5fa192e1faec69529f32536
import re


app = Flask(__name__, static_url_path='')
CORS(app)
api = Api(app)


with open('wiki_grunwortschatz.txt') as f:
    common_words = {line.strip().lower(): None for line in f.readlines()}


@app.route('/')
def root():
    return app.send_static_file('index.html')

class Definitions(Resource):
    def get(self, query):

        response = query_pons_dictionary(query=query, secret=secretkey)
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
                                    definition='',
                                    definition_url="")
                problem_words.add(word)
                results.append(result.__dict__)


        # Check for existence in word list
        words = re.sub("[^\w]", " ", text).split() if text else []
        for word in words:
            if word not in problem_words:
                try:
                    common_words[word]
                except KeyError:

                    response = query_pons_dictionary(query=word, secret=secretkey)
                    definitions = extract_definitions(response.json())
                    definition = list(definitions)[0]['definition']
                    definition_url = 'http://de.pons.com/%C3%BCbersetzung?' + response.url.split('?')[1]

                    result = WordResult(word=word, suggestions=[], problem='NotFoundInCommonList',
                                        definition=definition if definition else '',
                                        definition_url=definition_url if definition_url else '')
                    problem_words.add(word)
                    results.append(result.__dict__)

        return results

# api.add_resource(AnalyzeText, '/analyze/<string:text>')
api.add_resource(AnalyzeText, '/analyze')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True,  host='0.0.0.0', port=port)
