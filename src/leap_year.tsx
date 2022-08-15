import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Divider, InputLabel } from '@mui/material';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import './App.css';
require('react-dom');

function LeapYearCalc() {
  return (    
  <>
    <h1>Leap Year Calculator</h1>

    <TextField
      id="endYear"
      label="Enter end year of calculation"
      variant="standard"
      type="number" />
      <Divider />
      <Button variant="contained" startIcon={<AdUnitsIcon />} size="large" onClick={() => {
        alert('Calculated');
      }}>Calculate</Button>
  </>
  );
}

export default LeapYearCalc;
