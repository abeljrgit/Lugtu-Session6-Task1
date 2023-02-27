import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEmployeeChangeItem3 } from '../store/action';

class EmployeeDataClassBased extends Component {
  handleChangeItem = () => {
    if (this.props.empData[2].name == 'Albert') {
      this.props.onEmpChange({ id: 3, name: 'Leslie', address: 'Canada' });
    } else {
      this.props.onEmpChange({ id: 3, name: 'Albert', address: 'UK' });
    }
  };

  render() {
    return (
      <div>
        <h1>This is from EmployeeDataClassBased Component</h1>
        {this.props.empData.map((data) => {
          return (
            <div key={data.id}>
              <p>ID: {data.id}</p>
              <p>NAME: {data.name}</p>
              <p>ADDRESS: {data.address}</p>
            </div>
          );
        })}
        <button onClick={this.handleChangeItem}>Change Item #3</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { empData: state.employeeData };
};

const mapDispatchToProps = (dispatch) => {
  return { onEmpChange: (val) => dispatch(onEmployeeChangeItem3(val)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDataClassBased);
