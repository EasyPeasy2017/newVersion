import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  words: any[] = [];
  constructor() {

  }
  onNotify(message):void {
    console.log(message);
    this.words = message;
    //this.words =message.map((item)=>item.word);
  }

  ngOnInit() {
  }

}
