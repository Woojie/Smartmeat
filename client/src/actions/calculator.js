import { calculate } from '../func'

export const getCalculation = (e, order, quantity, frequency) => dispatch => {
  if (e !== 0) {
    e.preventDefault()
  }
  const getInfo = (order, quantity, frequency) => {
    return new Promise (resolve =>{
      const result = calculate(order, quantity, frequency)
      const carbonCost = calculate(order, quantity, frequency) * 0.43
      resolve({result, carbonCost})
    })
  }
  getInfo(order, quantity, frequency)
  .then((res)=>{
    dispatch({
      type: "GET_CALCULATE",
      payload: {
        result: Number(res.result),
        carbonCost: res.carbonCost,
        order,
        quantity: Number(quantity),
        frequency: Number(frequency)
      }
    })
  })
}
