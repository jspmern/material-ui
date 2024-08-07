import { InputAdornment, Stack, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import React, { useState } from 'react'
//textField have three varient -outlined,filled,standard

//important From Props for TextField
//-type="text/Number/email/range/colors"
// -required
//-heloperText
//InputProps={{readOnly:true}}
//disabled
//size
//color
//fullWidth-make full width of available sapce
//multiline
//maxRow
//minRow
//error

//apply icon in end or start we have to use
//InputProps={{startAdornment:<InputAdornment position='start'><PersonIcon/> </InputAdornment>}}

function TextFiields() {
    let [error,setError]=useState<boolean>(true)
    function errorHandler(event: React.ChangeEvent<HTMLInputElement>)
    {
      let data:String= event.target.value
      if(data.length>0)
      {
        setError(false)
      }
    }
  return (
   
     <>
    {/* //type of TextField */}
        <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
            <TextField label="outlined_name" variant='outlined'></TextField>
            <TextField label="filled_name" variant='filled'></TextField>
            <TextField label="standard_name" variant='standard'></TextField>
        </Stack>

        {/* //FormProps for TextField */}
        <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
            {/* //it is become required  */}
         <TextField label="UserName" required></TextField>
         {/* //helper text    */}
         <TextField label="password" required helperText="password must have strong"></TextField>
         {/* //readonly */}
          <TextField label="email"  InputProps={{readOnly:true}} helperText="this is readonly filed" value="utsavmatihili@gmail.com"></TextField>
          {/* disabled */}
          <TextField value="utsav" helperText="disabled" disabled></TextField>
          {/* type attribute */}
          <TextField helperText="password must have one symbol" type='password' label="Enter your password"></TextField>
          <TextField helperText="select range" type="range" label="range" variant='standard'></TextField>
          
        </Stack>
        {/* //size and color */}
        <Stack direction="row" sx={{mt:4,ml:3}}  >
            <TextField label=" small _username" size='small' color='secondary' variant='filled'></TextField>
        </Stack>
        {/* add Icon */}
        <Stack direction="row" sx={{mt:4,ml:3}}>
        <TextField   label="Enter your username" helperText="username must be unique"   color="warning" InputProps={{startAdornment:<InputAdornment position='start'><PersonIcon/> </InputAdornment>}}></TextField>

        <TextField fullWidth color='success' label="weigth" InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}></TextField>
        </Stack>
         

         {/* //this is for multiline */}
         {/* //if we are not mention multiline it is come under one line only if you mention multiline so, it comes from next line ,if you want to deside their size than you can use maxRow and minRow  (you will get scroll bar)*/}
         <Stack direction="row" sx={{mt:4,ml:4}}>
            <TextField label="Enter Your name" variant='outlined'  multiline></TextField>
            <TextField label="Enter Your address" variant='outlined'  maxRows={4} multiline></TextField>
         </Stack>

         {/* //error in TextField :---- The error prop toggles the error state. The helperText prop can then be used to provide feedback to the user about the error.*/}
         <Stack direction="row" sx={{mt:4,ml:3}}>
         <TextField error={error} variant='outlined' label="usernmae" onChange={errorHandler}  
         helperText={error?"Field is required":"do not share your password with anyone"}></TextField> 
         </Stack>
      
        </>
  
  )
}

export default TextFiields