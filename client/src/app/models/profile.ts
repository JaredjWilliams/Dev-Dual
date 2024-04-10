import {User} from "./user";

export class Profile {
  public user: User;
  public avatarUrl: string;


  constructor(
    avatar_url: string,
    user: User
  ) {
    this.user = user;
    this.avatarUrl = avatar_url;
  }
}
