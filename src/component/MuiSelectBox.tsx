import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiSelectBox() {
    let [singleSelect,setSingleSelect]=useState<string>('')
    let [countries,setCountries]=useState<string[]>([])
    console.log(countries)
    //console.log({singleSelect})
    //function for single select handler
    function singleSelectHandler(e:React.ChangeEvent<HTMLInputElement>){
        setSingleSelect(e?.target.value as string)
    }
    //this is for multiple handle change
    function multipleHandleChange(e:React.ChangeEvent<HTMLInputElement>)
    {
     let value=e.target.value
     setCountries(typeof value=="string"? value.split(','):value)
    }
  return (

    //example of single select
    <Box>
     <Box sx={{mt:4,ml:3,width:200}}>
        <TextField
         label="Enter your age"
         select
         fullWidth 
         helperText="Select your age"
         value={singleSelect}
         onChange={singleSelectHandler}
         //variant='standard'
         color='success'
         error={!singleSelect?true:false}
          >
            <MenuItem value={1}>one</MenuItem>
            <MenuItem value={2}>two</MenuItem>
            <MenuItem value={3}>three</MenuItem>
        </TextField>
     </Box>

     {/* //example of multiple select */}
     <Box sx={{mt:4,ml:3,width:200}}>
      <TextField 
       select 
       value={countries}
       onChange={multipleHandleChange}
       fullWidth
       label="Select Country"
        SelectProps={{multiple:true,}}
        
         >
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">Us</MenuItem>
        <MenuItem value="pk">pakistan</MenuItem>
      </TextField>
     </Box>
     </Box>
  )
}

export default MuiSelectBox