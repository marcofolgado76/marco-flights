import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HotelIcon from '@mui/icons-material/Hotel';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/iconBlack.png';
import { flightCardStyles } from './styles';

export default function DrawerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Link to="/">
        <img src={Logo} alt="Logo" style={flightCardStyles.logoImage} />
      </Link>
      <List>
        <Divider />
        <ListItem>
          <ListItemButton disabled>
            <ListItemIcon>
              <TravelExploreIcon />
            </ListItemIcon>
            <ListItemText primary={'Explore'} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={toggleDrawer(false)} selected>
            <ListItemIcon>
              <FlightTakeoffIcon style={{ color: '#1976d2' }} />{' '}
            </ListItemIcon>
            <ListItemText primary={'Flights'} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton disabled>
            <ListItemIcon>
              <HotelIcon />
            </ListItemIcon>
            <ListItemText primary={'Hotels'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List></List>
    </Box>
  );

  return (
    <div>
      <Button style={{ color: 'white' }} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
