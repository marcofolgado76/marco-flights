import React, { useContext, useState } from 'react';
import {
  Grid,
  Typography,
  IconButton,
  Popover,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Button,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { passengerSelectorStyles } from './styles';
import FlightsContext from 'context/FlightsContext';

const PassengerSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { adultsNumber, childrenNumber, setChildrenNumber, setAdultsNumber } =
    useContext(FlightsContext);

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value, minValue = 0) => {
    if (value > minValue) setter(value - 1);
  };

  const totalPassengers = adultsNumber + childrenNumber;
  const isOpen = Boolean(anchorEl);
  const popoverId = isOpen ? 'passenger-popover' : undefined;

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="passenger-selector-label">Passengers</InputLabel>
        <Select
          labelId="passenger-selector-label"
          value={totalPassengers || ''}
          label={`${totalPassengers} Passenger(s)`}
          onClick={openPopover}
          inputProps={{ readOnly: true }}
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
          IconComponent={ArrowDropDownIcon}
          renderValue={() => `${totalPassengers}`}
        >
          {/* Placeholder MenuItem, not used */}
          <MenuItem value={totalPassengers}>
            {totalPassengers} Passenger(s)
          </MenuItem>
        </Select>
      </FormControl>

      <Popover
        id={popoverId}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Grid container spacing={2} sx={passengerSelectorStyles.popover}>
          <Grid item xs={6}>
            <Typography>Adults</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <IconButton
              onClick={() => decrement(setAdultsNumber, adultsNumber, 1)}
              disabled={adultsNumber + childrenNumber <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography component="span">{adultsNumber}</Typography>
            <IconButton
              onClick={() => increment(setAdultsNumber, adultsNumber)}
            >
              <AddIcon />
            </IconButton>
          </Grid>

          <Grid item xs={6}>
            <Typography>Children (Aged 2-11)</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <IconButton
              onClick={() => decrement(setChildrenNumber, childrenNumber)}
              disabled={adultsNumber + childrenNumber <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography component="span">{childrenNumber}</Typography>
            <IconButton
              onClick={() => increment(setChildrenNumber, childrenNumber)}
            >
              <AddIcon />
            </IconButton>
          </Grid>

          <Grid item xs={6}>
            <Button onClick={closePopover} fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={closePopover} fullWidth variant="contained">
              Done
            </Button>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};

export default PassengerSelector;
