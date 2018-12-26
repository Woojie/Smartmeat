const calculator = {
  result: 0,
  carbonCost: 0,
  action: "",
  quantity: 0,
  frequency: 0,

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
      carbonCost: action.payload.carbonCost,
      order: action.payload.order,
      quantity: action.payload.quantity,
      frequency: action.payload.frequency,

    }
  }
  return state
}