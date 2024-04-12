import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-value',
  templateUrl: './field-value.component.html',
  styleUrls: ['./field-value.component.css']
})
export class FieldValueComponent implements OnInit {

  @Input() entry : [string, any] = [",", ""];

  constructor() { }

  ngOnInit(): void {
  }

}
