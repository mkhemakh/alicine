import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormUser from '../FormUser';
import Header from '../Header';

const SignUp = () => {
    return (
      <>
      <Header />
      <FormUser  />
      </>
    );
};

export default SignUp;