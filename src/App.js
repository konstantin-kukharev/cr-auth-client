import React from 'react';
import AuthPage from './template/Auth'
import MainPage from './template/Main'
import {connect} from "react-redux"

const App = ({ authorized, token }) => {
  return (authorized === false || token === null) ? <AuthPage/> : <MainPage/>
}

const mapStateToProps = (state) => {
  const { authorized, token } = state.auth || {};

  return { authorized, token }
};

export default connect(mapStateToProps)(App)