import {User} from "../models/user";
import {instanceToPlain, plainToClass} from "class-transformer";
import {Profile} from "../models/profile";


export const  jsonToProfiles = (json: any) => calculateWinner([...Array(json.length)]
  .map((_, index) => jsonToProfile(json[index])))

export const jsonToProfile = (json : any) => plainToClass(Profile, {
    avatarUrl: json.avatar_url,
    bio: json.bio,
    user: instanceToPlain(jsonToUser(json)),
  })

export const jsonToUser= (json: any) => plainToClass(User, Object.fromEntries(
    Object.entries(json).filter(([key, value]) => key !== 'avatar_url' && key !== 'bio')))

const calculateWinner = (profiles : Profile[]) => {
  const [ profileOne, profileTwo] = profiles

  if (profileOne.user["total-stars"] === undefined || profileTwo.user["total-stars"]  === undefined) {
    return profiles
  }

  if (profileOne.user["total-stars"] > profileTwo.user["total-stars"]) {
    profileOne.winner = true
  } else {
    profileTwo.winner = true
  }

  return profiles
}

