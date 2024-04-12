import {User} from "./user";

export class Profile {
  public user: User;
  public avatarUrl: string;
  public bio: string;
  public winner: boolean = false;


  constructor(
    avatar_url: string,
    bio: string,
    user: User,
    winner: boolean
  ) {
    this.user = user;
    this.avatarUrl = avatar_url;
    this.bio = bio;
    this.winner = winner;
  }
}
