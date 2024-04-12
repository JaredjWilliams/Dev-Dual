import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { jsonToProfiles} from "../Transformers/JsonToProfile";
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

  ngOnInit(): void { }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.errorMessage = "";
    this.userService.duelUsers(this.usernameOne, this.usernameTwo)
      .then((data: any) => jsonToProfiles(data))
      .then((profiles: Profile[]) => this.profiles = profiles)
      .catch((error: { status: number; }) => { this.errorMessage = errorMessage(error.status) })
  }
}
