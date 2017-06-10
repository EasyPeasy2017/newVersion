import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let jQuery: any;
import {TestService} from '../test.service';
import { words } from './beginner-words-data';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers:[TestService]
})
export class TextAreaComponent implements OnInit, AfterViewInit {

  constructor(public textService:TestService) {
    //console.log(words);


  }



  ngAfterViewInit() {
    this.initializePolling().subscribe(data => {
       jQuery('#feedback').empty();
       console.log(data);
       console.log(
       data.filter((elem)=>{
         if(elem.problem=="not in list"){
           return elem;
         }
       }).map((elem)=>{return elem.word})
     );

       data.forEach((item)=>{
         jQuery('#feedback').append('<p>'+item.word+'</p>');
       });

       jQuery('.string-example').highlightWithinTextarea({
       highlight: data.filter((elem)=>{
         if(elem.problem=="not in list"){
           return elem;
         }
       }).map((elem)=>{return elem.word}),
       className: 'blue'// string, regexp, array, function, or custom object
      });
    })
  }
  ngOnInit() {
  }

  myMethod(event:string){
    /*
    let listOfWords = event.replace( /\n/g, " " ).split( " " );
    let unknowWords =[];
    listOfWords.forEach((item)=>{
      if(words.indexOf(item)===-1){
        unknowWords.push(item);
      }
    });
    console.log(unknowWords);*/
    return event;
  //  console.log(event.replace( /\n/g, " " ).split( " " ));
  }

  initializePolling() {

  return Observable
     .interval(5000)
     .flatMap(() => {
       console.log( );
       var text =jQuery('#textarea').val();
       return  this.textService.getTextAnalysis(text);
     })//.map( res => res.json() )
/*
      .subscribe(data => {
         console.log(data)
      });*/
}

}
