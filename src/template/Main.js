import React from 'react';
import Bar from '../components/stateless/Bar'
import Menu from '../components/dynamic/Menu'
import Copyright from '../components/stateless/Copyright'
import Styles from "./styles/MainTemplate";
import {
  Container,
  CssBaseline,
} from '@material-ui/core';
import {connect} from "react-redux";

const Main = ({ currentPage }) => {
  const classes = Styles();

  return (
    <div>
      <CssBaseline />
      <Bar title={currentPage.name}/>
      <div className={classes.workArea}>
        <Menu/>
        <main className={classes.content}>
          {currentPage.page()}
          <Container className={classes.container}>
            <Copyright />
          </Container>
        </main>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { menu, currentPageIndex } = state.page || {};

  return { currentPage: menu[currentPageIndex] }
};

export default connect(mapStateToProps)(Main);