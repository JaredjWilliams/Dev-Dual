import {User} from "../models/user";
import {plainToClass} from "class-transformer";
import {Profile} from "../models/profile";

export const jsonToProfile = (json : any) => plainToClass(Profile, {
  avatarUrl: json.avatar_url,
  bio: json.bio,
  user: jsonToUser(json)
})

export const jsonToUser= (json: any) => plainToClass(User, Object.fromEntries(
  Object.entries(json).filter(([key, value]) =>
    key !== 'avatar_url' && key !== 'bio'
  )))

export const  objectsToProfiles = (json: any) => [...Array(json.length)]
  .map((_, index) => jsonToProfile(json[index]))

export const objectToProfile = (json: any) => jsonToProfile(json)

