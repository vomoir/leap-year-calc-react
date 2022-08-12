import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './App.css';
require('react-dom');

function LeapYearCalc() {
  return (    
  <>
    <h1>Hello</h1>
    <Button variant="contained">Hello World</Button><br/>
    <label htmlFor="endYear">End Year:</label>
    <TextField
      id="endYear"
      placeholder="Enter end year of calculation"
      type="number" />
  </>
  );
}

export default LeapYearCalc;
