

export const errorMessage = (status : number ) => {
    switch (status) {
      case 400:
            return 'Bad Request. Make sure your username is correct.';
        case 404:
            return 'Not Found. This user does not exist.';
        case 500:
            return 'Internal Server Error.';
        default:
            return 'Something went wrong.';
    }
}

export const formatEntries = (entries : [string, any][]) => {
  return [...Array(entryOrder.length)].map((_, index) => entries.find((entry : any) => entry[0] === entryOrder[index])!)
}

const entryOrder  = ['username', 'name', 'location', 'titles', 'favorite-language', 'total-stars', 'highest-starred', 'public-repos', 'perfect-repos', 'followers', 'following']
