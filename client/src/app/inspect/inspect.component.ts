import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import {Profile} from "../models/profile";
import {jsonToProfile} from "../Transformers/JsonToProfile";
import {errorMessage} from "../utils/utils";

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  profiles: Profile[] = [];
  errorMessage: string = "";


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.errorMessage = "";
    this.userService.inspectUser(this.username)
      .then(res => jsonToProfile(res))
      .then(profile => this.profiles = [profile])
      .then(() => console.log(this.profiles))
      .catch(error => {
        this.errorMessage = errorMessage(error.status);
        console.log(this.errorMessage)
      })
  }
}
