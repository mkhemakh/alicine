import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormUser from '../FormUser';
import Header from '../Header';

const SignUp = () => {

    const dispatch = useDispatch()
    let film  = useSelector(state => state.movieReducer);
    console.log(film);
    return (
      <>
      <Header />
      <FormUser  />
      </>
    );
};

export default SignUp;