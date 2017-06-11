import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  parentSubject:Subject<any> = new Subject();
  words: any[] = [];
  constructor() {

  }
  onNotify(message):void {
    console.log(message);
    this.words = message;
    //this.words =message.map((item)=>item.word);
  }

  checkButton(){
    this.parentSubject.next('some value');
  }

  ngOnInit() {
  }

}
