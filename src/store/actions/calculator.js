export const startCalculate = () => {
  return{
    type: "START_CALCULATE"
  }
}

export const finishCalculate = (result, carbonCost, order, quantity, frequency) => {
  return{
    type: "FINISH_CALCULATE",
    payload: {
      result,
      carbonCost,
      order, 
      quantity,
      frequency,
    }
  }
}