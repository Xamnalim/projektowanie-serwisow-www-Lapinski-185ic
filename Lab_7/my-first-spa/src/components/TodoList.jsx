import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

const TodoList = () => {

    const initialTodoList = [
        "Zrobić zakupy",
        "Zetrzeć kurze w salonie",
        "Pozmywać naczynia",
        "Odkurzyć dywan w małym pokoju"
    ];
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [todoList, setTodoList] = React.useState(initialTodoList);

    return (
        <Box>
            <Typography align="center" variant="h2">Todo list</Typography>
            <List dense className={classes.root}>
                {todoList.map((todo, index) => {
                    const labelId = `checkbox-list-secondary-label-${index}`;
                    return (
                        <ListItem key={index} button>
                            <ListItemText id={index} primary={todo} />
                            <ListItemSecondaryAction>
                                <Checkbox edge="end" />
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}

export default TodoList;