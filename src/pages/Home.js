import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../store/action';
import { Counter } from '../components';
import EmployeeDataClassBased from '../components/EmployeeDataClassBased';
import EmployeeDataFunctional from '../components/EmployeeDataFunctional';
class Home extends Component {
  handleInc = () => {
    this.props.onInc(2);
  };

  handlerDec = () => {
    this.props.onDec(2);
  };

  render() {
    return (
      <section>
        <p>This is home count is {this.props.count}</p>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handlerDec}>Decrement</button>
        <Counter />
        <br />
        <EmployeeDataClassBased />
        <br />
        <EmployeeDataFunctional />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: (val) => dispatch(onIncrement(val)),
    onDec: (val) => dispatch(onDecrement(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
