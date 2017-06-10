import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  private apiUrl:string;
  constructor(private http: Http) {
    this.apiUrl ='http://localhost:5000/analyze/';

 }

 getTextAnalysis(data){
   console.log(data);
      var requestoptions = new RequestOptions({
       method: RequestMethod.Post,
       url: this.apiUrl+data,
      // body: obj
     })
    return this.http.request(new Request(requestoptions))
    .map((res: Response) => {
      if (res) {
          return res.json();
      }
    });
  }
}
