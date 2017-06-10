import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  private apiUrl:string;
  constructor(private http: Http) {
    this.apiUrl ='https://wt-encisoenrique-gmail-com-0.run.webtask.io/medialab/fake-endpoint';
 }

 getTextAnalysis(data){
   console.log(data);
   var obj ={};
   obj['text'] = data;
       var requestoptions = new RequestOptions({
       method: RequestMethod.Post,
       url: this.apiUrl/*+'/projects?client_id='+data.client_id*/,
       body: obj
     })
    return this.http.request(new Request(requestoptions))
    .map((res: Response) => {
      if (res) {
          return res.json();
      }
    });
  }
}
