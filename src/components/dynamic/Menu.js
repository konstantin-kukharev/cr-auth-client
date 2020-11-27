import React from 'react';
import {createElement} from 'react';
import Styles from "../../template/styles/LeftMenu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from "react-redux";
import { changePage } from "../../redux/actions";

const Menu = ({menu, currentPageIndex, changePage}) => {
    const classes = Styles();

    if(menu.length !== 0) {
        return (
            <List
                component="nav"
                className={classes.menu}
            >
                {menu.map((item, i) => {
                    return (
                        <ListItem button
                                  key={`menu-${i}`}
                                  selected={currentPageIndex === i}
                                  onClick={() => {changePage(i)}}
                        >
                            <ListItemIcon>
                                {createElement(item.icon)}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    )
                })}
            </List>
        );
    }
}

const mapStateToProps = state => {
       const { menu, currentPageIndex } = state.page || {};

       return { menu, currentPageIndex }
};

export default connect(mapStateToProps, { changePage })(Menu);