import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import {jsonToProfile, objectsToProfiles} from "../Transformers/JsonToProfile";
import {Profile} from "../models/profile";
import {TEST_USERS} from "../../seeder";

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""

  profiles : Profile[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.profiles  = objectsToProfiles(TEST_USERS)
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.duelUsers(this.usernameOne, this.usernameTwo)
      .then((data: any) => objectsToProfiles(data))
      .then((profiles) => this.profiles = profiles)
      .then(() => console.log(this.profiles))
  }
}
