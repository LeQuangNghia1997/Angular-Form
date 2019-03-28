import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-edittor',
  templateUrl: './name-edittor.component.html',
  styleUrls: ['./name-edittor.component.scss']
})
export class NameEdittorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   name = new FormControl('');

  updateName(){
    this.name.setValue('Nacry');
  }
}
