import {Expose, Transform} from "class-transformer";

export class User {

  @Transform(({  value }) => value, { toClassOnly: true })
  @Expose({ name: 'total-stars' })
  public totalStars: number | undefined;

  constructor(
    username: string,
    name: string,
    location: string,
    titles: [string],
    favoriteLanguage: string,
    totalStars: number,
    publicRepos: number,
    perfectRepos: number,
    followers: number,
    following: number,
  ) { }

  [key: string]: number | undefined | string | [string];


}
