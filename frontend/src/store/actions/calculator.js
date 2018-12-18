export const startCalculate = () => {
  return{
    type: "START_CALCULATE"
  }
}

export const finishCalculate = (result, carbonCost) => {
  return{
    type: "FINISH_CALCULATE",
    payload: {
      result,
      carbonCost,
    }
  }
}