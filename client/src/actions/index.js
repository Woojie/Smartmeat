
export const startSignup = () => ({
  type: "START_SIGNUP"
})


export const finishSignup = () => ({
  type: "FINISH_SIGNUP"
})

export const userExists = () => ({
  type: "USER_EXISTS_SIGNUP"
})



export const validateEmailError = () => ({
  type: "VALIDATE_SIGNUP_ERROR"
})


export const validatePasswordError = () => ({
  type: "VALIDATE_PASSWORD_ERROR"
})


export const validateNamesError = () => ({
  type: "VALIDATE_NAMES_ERROR"
})
