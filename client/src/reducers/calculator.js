const calculator = {
  result: 0,
  carbonCost: 0,
  order: "",
  quantity: 0,
  frequency: 0,
}

export const calculatorReducer = (state=calculator, action) =>{

  if(action.type === "GET_CALCULATE") {
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