import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {Profile} from "../../models/profile";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() profiles: Profile[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
