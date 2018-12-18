const calculator = {
  result: 0,
  carbonCost: 0,

}

export const calculatorReducer = (state=calculator, action) =>{
  if(action.type === "START_CALCULATE") {
    return {
      ...state
    }
  }else if(action.type === "FINISH_CALCULATE") {
    return {
      ...state,
      result: action.payload.result,
      carbonCost: action.payload.carbonCost
    }
  }
  return state
}