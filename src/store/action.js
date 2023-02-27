import * as actions from './actionType';

export const onIncrement = (val) => {
  return {
    type: actions.INC,
    payload: val,
  };
};

export const onDecrement = (val) => {
  return {
    type: actions.DEC,
    payload: val,
  };
};

export const onEmployeeChangeItem3 = (val) => {
  return {
    type: actions.EMPLOYEE_CHANGE_ITEM3,
    payload: val,
  };
};

export const onEmployeeChangeItem4 = (val) => {
  return {
    type: actions.EMPLOYEE_CHANGE_ITEM2,
    payload: val,
  };
};
