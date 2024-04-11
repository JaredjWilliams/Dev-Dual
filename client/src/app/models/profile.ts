import {User} from "./user";

export class Profile {
  public user: User;
  public avatarUrl: string;
  public bio: string;


  constructor(
    avatar_url: string,
    bio: string,
    user: User
  ) {
    this.user = user;
    this.avatarUrl = avatar_url;
    this.bio = bio;
  }
}
