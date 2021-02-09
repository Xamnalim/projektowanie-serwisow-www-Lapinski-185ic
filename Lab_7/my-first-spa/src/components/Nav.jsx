import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ImageIcon from '@material-ui/icons/Image';


const useStyles = makeStyles({
  stickToBottom: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

const links = [
  { id: 0, href: "/", label: "Home", icon: <HomeIcon /> },
  { id: 1, href: '/todolist', label: "Todo list", icon: <PlaylistAddCheckIcon /> },
  { id: 2, href: '/gallery', label: "Gallery", icon: <ImageIcon /> },
];

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const location = useLocation();
  const active = links.find(link => link.href === location.pathname)?.id || 0;


  return (
    <BottomNavigation
      value={active}
      showLabels
      className={classes.stickToBottom}
    >
      {links.map(link => <BottomNavigationAction key={link.id} href={link.href} label={link.label} icon={link.icon}/>)}
    </BottomNavigation>
  );
}
