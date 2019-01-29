import { mongoUser } from '../apis/mongoDB'

export const signUserUp = (e, email, password, firstName, lastName) => dispatch => {
  e.preventDefault()
  mongoUser.post('', {email, password, firstName, lastName})
  .then((res)=>{

    if(res.data.error) {
      dispatch({
        type: "USER_EXISTS_SIGNUP"
      })
    }else if (res.data.emailError || res.data.passwordError || res.data.namesError) {

      if (res.data.emailError) {
        dispatch({
          type: "VALIDATE_SIGNUP_ERROR"
        })
      }
      if (res.data.passwordError) {
        dispatch({
          type: "VALIDATE_PASSWORD_ERROR"
        })
      }
      if (res.data.namesError) {

        dispatch({
          type: "VALIDATE_NAMES_ERROR"
        })
      }
    }else {

    dispatch({
      type: "FINISH_SIGNUP"
    })
  }
  })
}

