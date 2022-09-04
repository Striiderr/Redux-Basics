import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreaters, dispatch);
  const {withdraw,deposit}= bindActionCreators(actionCreaters, dispatch);

  return (
    <div className="container-fluid d-flex">
      <p className="m-4 fs-2 fw-lighter ">
        {' '}
        Withdraw/Deposit Money from your Balance :
      </p>

      {/* <button className="btn fs-4 btn-primary my-4 w-auto" onClick={()=>dispatch(actionCreaters.withdraw(300)) }>-</button>*/}

      <button
        className="btn fs-4 btn-primary my-4 w-auto"
        onClick={()=>withdraw(300)}
      >
        -
      </button>
      <p className="mt-4 fs-2 mx-2 ">
        {' '}
        Credit or Debit ₹300
      </p>
      {/* <button className="btn fs-4 btn-primary my-4 w-auto" onClick={dispatch(actionCreaters.deposit(300)) }>+</button> */}
      <button
        className="btn fs-4 btn-primary my-4 w-auto"
        onClick={()=> deposit(300)}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
