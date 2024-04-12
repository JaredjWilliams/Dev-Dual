

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
