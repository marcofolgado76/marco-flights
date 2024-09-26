import React, { useState } from 'react';
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
import { passengerSelectorStyles } from './styles'; // Import the styles

const PassengerSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adults, setAdults] = useState(1); // Ensure at least 1 adult
  const [children, setChildren] = useState(0); // Can be 0 or more

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

  const totalPassengers = adults + children;
  const isOpen = Boolean(anchorEl);
  const popoverId = isOpen ? 'passenger-popover' : undefined;

  return (
    <>
      {/* Use FormControl and Select to show total passengers */}
      <FormControl fullWidth variant="outlined">
        <InputLabel id="passenger-selector-label">Passengers</InputLabel>
        <Select
          labelId="passenger-selector-label"
          value={totalPassengers}
          label={`${totalPassengers} Passenger(s)`}
          onClick={openPopover} // Open popover on click
          inputProps={{ readOnly: true }} // Prevent default dropdown behavior
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
          IconComponent={ArrowDropDownIcon} // Use dropdown icon
          renderValue={() => `${totalPassengers}`} // Display total passengers
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
          {/* Adults */}
          <Grid item xs={6}>
            <Typography>Adults</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            {/* Disable decrement if only 1 adult */}
            <IconButton
              onClick={() => decrement(setAdults, adults, 1)}
              disabled={adults + children <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography component="span">{adults}</Typography>
            <IconButton onClick={() => increment(setAdults, adults)}>
              <AddIcon />
            </IconButton>
          </Grid>

          {/* Children */}
          <Grid item xs={6}>
            <Typography>Children (Aged 2-11)</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            {/* Children can be decremented to 0 */}
            <IconButton
              onClick={() => decrement(setChildren, children)}
              disabled={adults + children <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography component="span">{children}</Typography>
            <IconButton onClick={() => increment(setChildren, children)}>
              <AddIcon />
            </IconButton>
          </Grid>

          {/* Buttons */}
          <Grid item xs={6}>
            {/* Cancel button in black, with custom style */}
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
