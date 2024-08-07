import { Box, FormControl, FormHelperText, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, {  useState } from 'react'
function MuiSelect2() {
    let [number,setNumber]=useState('')
    let [country,setCountry]=useState('')
    let [text,setText]=useState<string[]>([])
    //this is for number Handler
    function numberHandler(event:SelectChangeEvent)
    {
        setNumber(event?.target.value)
    }
    //this is for the country handler
    function countaryHandler(event:SelectChangeEvent)
    {
        setCountry(event.target.value)
    }
    //this is for text handler
    function textHandler(event:SelectChangeEvent<typeof text>)
    {
        setText(typeof event.target.value === "string"?event.target.value.split(','):event.target.value)
    }
    console.log({country})
  return (
    <>
    <Box  width={200}  sx={{mt:4,ml:3}}>
        {/* //this is from single select */}
        <FormControl fullWidth size="small">
             <InputLabel>Age</InputLabel>
             <Select value={number} 
              onChange={numberHandler}
               color='secondary'
                >
                <MenuItem value="one">one</MenuItem>
                <MenuItem value="two">two</MenuItem>
                <MenuItem value="three">three</MenuItem>
             </Select>
             <FormHelperText>slect your age</FormHelperText>
        </FormControl>
      
    </Box>
         {/* //this is for small  */}
        
    <Box width={200} sx={{ml:3,mt:4}}> 
    <FormControl fullWidth  >
            <InputLabel id="demo-simple-select-readonly-label" >countary</InputLabel>
            <Select value={country} 
            onChange={countaryHandler}
                labelId="demo-simple-select-readonly-label"
                 label="country"
             >
                <MenuItem value="in">Ind</MenuItem>
                <MenuItem value="us">us</MenuItem>
                <MenuItem value="pak">pak</MenuItem>

            </Select>
            <FormHelperText>select your countary</FormHelperText>
        </FormControl>
    </Box>

    <Box sx={{mt:3,ml:4}} width={200}>
        <FormControl fullWidth>
            <InputLabel>multiple select</InputLabel>
            <Select 
            value={text} 
            onChange={textHandler}
            multiple   >
                <MenuItem value="a">a</MenuItem>
                <MenuItem value="b">b</MenuItem>
                <MenuItem value="c">c</MenuItem>
                <MenuItem value="d">d</MenuItem>

            </Select>
        </FormControl>
    </Box>
    </>
  )
}

export default MuiSelect2