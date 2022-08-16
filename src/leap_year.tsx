import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, Divider, InputLabel, List, ListItem, Paper, Snackbar } from '@mui/material';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { spacing } from '@mui/system';

import './App.css';
require('react-dom');

function LeapYearCalc() {
  const [startYear, setStartYear] = useState<string>('');
  const [leapYearResults, setLeapYearResults] = useState<number[]>([]);
  const [endYear, setEndYear] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [open, setOpen] = useState(false);
  const handleStartInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setStartYear(event.target.value);
  };
  const handleEndInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEndYear(event.target.value);
  };
  
  const leapYearCalc = () => {
    let startVal = parseInt(startYear);
    let endVal = parseInt(endYear);
    let yearList = [];
    setLeapYearResults([]);
    if(startVal > endVal){
      setErrorMessage("Start year must be less than End year");
      setOpen(true);
      return false;
    }
    for (var yearVal = startVal; yearVal < endVal + 1; yearVal++) {
      if (leapYear(yearVal)) {
          //add the valid year
          yearList.push(yearVal);          
      }
    }
    setLeapYearResults(yearList);
  }

  const leapYear = (year:number) => {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }
  return (    
  <>    
    <Box sx={{ boxShadow: 3, mx: "auto", mt: 10, p:3, width:400 }}>
      <h1>Leap Year Calculator</h1>
      <TextField
          id="startYear"
          label="Enter start year"
          variant="standard"          
          type="number"
          value= {startYear}
          onChange= {handleStartInputChange}
      />
      <br />  
      <TextField
        id="endYear"
        label="Enter end year"
        variant="standard"
        type="number"
        value = {endYear}
        onChange = {handleEndInputChange} 
      />
      <br />
      <Button sx={{my:2}} variant="contained" startIcon={<AdUnitsIcon />} onClick = {leapYearCalc} size="large">Calculate</Button>
      <Paper variant="outlined" elevation={5} style={{maxHeight: 200, overflow: 'auto'}}>
        <List>
          {leapYearResults && leapYearResults.map((y) => (
            <ListItem>{y}</ListItem>
          ))}
        </List>
      </Paper>
    </Box>
    <Snackbar
      autoHideDuration={4000}
      message={errorMessage}
      open={open}
      onClose={() => setOpen(false)} 
      anchorOrigin={{ vertical:'top', horizontal: 'center' }}>
      <Alert variant="filled" severity="error" sx={{ width: '100%' }}>{errorMessage}</Alert>
    </Snackbar>
  </>
  );
}

export default LeapYearCalc;
