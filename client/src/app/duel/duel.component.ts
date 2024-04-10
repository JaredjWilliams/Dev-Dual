import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import {jsonToProfile, objectsToProfiles} from "../Transformers/JsonToProfile";
import {User} from "../models/user";
import {Profile} from "../models/profile";

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
    // this.users.push(jsonToProfile({
    //   "avatar_url": "https://avatars.githubusercontent.com/u/106778989?v=4",
    //   "bio": "Software developer, learner, average pickleball player.",
    //   "favorite-language": "TypeScript",
    //   "followers": 3,
    //   "following": 3,
    //   "highest-starred": 1,
    //   "location": "Greenwood, Indiana",
    //   "name": "Jared Williams",
    //   "perfect-repos": 12,
    //   "public-repos": 13,
    //   "titles": [],
    //   "total-stars": 1,
    //   "username": "JaredjWilliams"
    // }))
    //
    // this.users.push(jsonToProfile({
    //   "avatar_url": "https://avatars.githubusercontent.com/u/6119310?v=4",
    //     "bio": "Doing a little of this and that.",
    //     "favoriteLanguage": undefined,
    //     "followers": 7,
    //     "following": 10,
    //     "location": "Indianapolis",
    //     "name": "David Dalton",
    //     "perfectRepos": undefined,
    //     "publicRepos": undefined,
    //     "titles": [],
    //     "totalStars": undefined,
    //     "username": "daviddalton"
    // }))
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
