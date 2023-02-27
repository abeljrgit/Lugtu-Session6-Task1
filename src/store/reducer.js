import { fill } from 'lodash';
import * as actions from './actionType';

// Central Storage
const initState = {
  count: 88,
  employeeData: [
    {
      id: 1,
      name: 'Abel',
      address: 'Philippines',
    },
    {
      id: 2,
      name: 'John',
      address: 'USA',
    },
    {
      id: 3,
      name: 'Albert',
      address: 'UK',
    },
    {
      id: 4,
      name: 'Xuan Li',
      address: 'China',
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actions.INC:
      return { ...state, count: state.count + action.payload };
    case actions.DEC:
      return { ...state, count: state.count - action.payload };
    case actions.EMPLOYEE_CHANGE_ITEM3:
      const newArray = fill(state.employeeData, action.payload, 2, 3);
      return {
        ...state,
        employeeData: [...newArray],
      };
    case actions.EMPLOYEE_CHANGE_ITEM2:
      const newArray2 = fill(state.employeeData, action.payload, 3, 4);
      return {
        ...state,
        employeeData: [...newArray2],
      };
    default:
      return state;
  }

  return state;
};

export default reducer;
