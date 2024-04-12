import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import {jsonToProfile, jsonToProfiles} from "../Transformers/JsonToProfile";
import {Profile} from "../models/profile";
import {errorMessage} from "../utils/utils";

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  errorMessage: string = ""

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
    this.userService.duelUsers(this.usernameOne, this.usernameTwo).toPromise()
      .then((data: any) => jsonToProfiles(data))
      .then((profiles) => this.profiles = profiles)
      .then(() => console.log(this.profiles))
      .catch(error => {
        this.errorMessage = errorMessage(error.status);
        console.log(this.errorMessage)
      })
  }
}
