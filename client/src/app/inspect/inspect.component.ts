import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import {objectsToProfiles, objectToProfile} from "../Transformers/JsonToProfile";
import {Profile} from "../models/profile";

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  profiles: Profile[] = [];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username)
      .then(res => objectToProfile(res))
      .then(profiles => this.profiles = [profiles])
  }



}
