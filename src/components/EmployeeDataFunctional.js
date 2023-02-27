import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onEmployeeChangeItem4 } from '../store/action';

const EmployeeDataFunctional = () => {
  const empData = useSelector((state) => {
    return state.employeeData;
  });
  const dispatch = useDispatch();

  const handleChangeItem = () => {
    if (empData[3].name == 'Xuan Li') {
      dispatch(
        onEmployeeChangeItem4({ id: 4, name: 'Kylie', address: 'Australia' })
      );
    } else {
      dispatch(
        onEmployeeChangeItem4({ id: 4, name: 'Xuan Li', address: 'China' })
      );
    }
  };

  return (
    <div>
      <h1>This is from EmployeeDataFunctional Component</h1>
      {empData.map((data) => {
        return (
          <div key={data.id}>
            <p>ID: {data.id}</p>
            <p>NAME: {data.name}</p>
            <p>ADDRESS: {data.address}</p>
          </div>
        );
      })}
      <button onClick={handleChangeItem}>Change Item #4</button>
    </div>
  );
};

export default EmployeeDataFunctional;
