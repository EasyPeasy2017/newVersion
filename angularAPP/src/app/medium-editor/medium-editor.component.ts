import { Component, OnInit, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';
declare let MediumEditor: any;

@Component({
  selector: 'app-medium-editor',
  templateUrl: './medium-editor.component.html',
  styleUrls: ['./medium-editor.component.css']
})
export class MediumEditorComponent implements OnInit, AfterViewInit, OnDestroy {

  editorId: string;
  editor:any;
  constructor() {
    this.editorId = `editor-${Math.floor(Math.random() * 10000)}`;

  }

  ngAfterViewInit() {

    let options = {
      //skin_url: 'assets/skins/lightgray',
      //selector: '#' + this.editorId,
      setup: (editor: any) => {
        this.editor = editor;

/*
        this.editor.on('change', () => {
          const newContent = editor.getContent();
          this.editorChange.emit(newContent);
        });

        this.getEditor.emit(this.editor);*/
      }
    };
    //Object.assign(options, this.editorOptions);
    this.editor =new MediumEditor('.editable', options);
    this.editor.subscribe('editableInput', function (event, editable) {
    // Do some work
      //console.log(event);
      console.log(editable);
    });



  }



  ngOnDestroy(): void {
    //tinymce.remove(this.editor);
  }
  ngOnInit() {
  }

}
