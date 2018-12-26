import React, {Component} from 'react'
import Calcform from './CalcForm'

class ModalAlterReport extends Component {
  
  render() {
    let { carbon, petrol, frequency, quantity, order} = this.props.report
    
    return (
      <div className="modal fade" id="saveReportModal" tabIndex="-1" role="dialog" aria-labelledby="saveReportModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Alter Report</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Calcform 
              email={this.props.email}
              getCalculation={this.props.getCalculation}
              carbon={carbon}
              petrol={petrol}
              frequency = {frequency}
              quantity = {quantity}
              order = {order}  
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button  data-dismiss="modal" type="button" className="btn btn-primary">See how much you save!</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ModalAlterReport