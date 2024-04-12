import {Expose, Transform} from "class-transformer";

interface UserProps {
  [key: string]: number | undefined | string | [string];
}

export class User implements UserProps {



  @Transform(({  value }) => value, { toClassOnly: true })
  @Expose({ name: 'total-stars' })
  public totalStars: number | undefined;

  constructor(
    username: string,
    name: string,
    location: string,
    titles: [string],
    favoriteLanguage: string,
    publicRepos: number,
    perfectRepos: number,
    followers: number,
    following: number,
  ) {
  }

  [key: string]: number | undefined | string | [string];


}
