import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Material-UI Button
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import DrawerMenu from '../DrawerMenu';
import Logo from '../../assets/images/icon.png';
import { headerStyles } from './styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const Header = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <div style={headerStyles.header}>
      <Container maxWidth="lg">
        {' '}
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={2} sm={1}>
            <DrawerMenu />
          </Grid>

          <Grid item xs={6} sm={4}>
            <Link to="/">
              <img src={Logo} alt="Logo" style={headerStyles.logoImage} />
            </Link>
          </Grid>

          {!isSmallScreen && (
            <Grid item xs={12} sm={7}>
              <ul style={headerStyles.navLinks}>
                <li style={headerStyles.navLinkItem}>
                  <Button
                    startIcon={<TravelExploreIcon />}
                    disabled
                    component={Link}
                    to="/explore"
                    variant={
                      location.pathname === '/explore'
                        ? 'contained'
                        : 'outlined'
                    }
                    style={headerStyles.navButton}
                  >
                    Explore
                  </Button>
                </li>

                <li style={headerStyles.navLinkItem}>
                  <Button
                    startIcon={<FlightTakeoffIcon />}
                    component={Link}
                    to="/"
                    variant={
                      location.pathname === '/' ? 'contained' : 'outlined'
                    }
                    style={headerStyles.navButton}
                  >
                    Flights
                  </Button>
                </li>

                <li style={headerStyles.navLinkItem}>
                  <Button
                    disabled
                    startIcon={<HotelIcon />}
                    component={Link}
                    to="/hotels"
                    variant={
                      location.pathname === '/hotels' ? 'contained' : 'outlined'
                    }
                    style={headerStyles.navButton}
                  >
                    Hotels
                  </Button>
                </li>
              </ul>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
