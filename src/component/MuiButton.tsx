import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
//there is three varient of button :_ contained,text,outlined that

//if you want make text button either you have to give varient text or without any class but note point is if you want make it link  means anchore tage you have to pass href than button become anchor tag
//if you want to make button disable you have to pass disabled

//if you want to remove elevation(remove shadow) than you have to use  disableElevation

//if you want to fill color in button bydefault you are getting six color , fllow this link
// https://mui.com/material-ui/customization/palette/#default-colors

//button with icon :- for that one you have to install material icon
// goto -> component -> icon in document   follow this link
// https://mui.com/material-ui/icons/

//icon button- means without any text you have to make icon as button for that one  <IconButton> is one component and helthy pratice is always give aria-label


//if you want to handle the onlick for that one you have to Give onclick Event

// ----------------------------ButtonGroup-------------------------------------------
// -if you want to make buttonGroup  use <ButtonGroup/> component inside use button dont give indivisual varient direct pass in parent
// for button group you can set orientation ="vertical" and you can set varient , disableEvalation

//and follow api document for ButtonGroup and Button


//-------------------------------toggleButton------------------------------
//for creating toggleButton you have to use <ToggleGroup/>
function MuiButton() {
    let [toggleButtonValue,setToggleButtonValue]=useState<string[]>([])
    //this is for handling toggle value
    function handleToggle(event:React.MouseEvent<HTMLElement>,newFormate:[])
    {
    //   setToggleButtonValue((pre)=>{
    //     return [...pre,...newFormate]
    //   })
      console.log(newFormate)
    }
   
  return (
    <>
    {/* //for make different style button */}
    <Stack direction="row" spacing={2} alignItems="center" sx={{mt:4,ml:3}}>
    <Button variant="contained">Contained</Button>
    <Button  variant='text'>Text</Button>
    <Button variant='outlined'>Outlined</Button>
    </Stack>
  

  {/* //for making text and link button */}
    <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
       <Button>Text</Button>
       <Button variant='text'>Text</Button>
       <Button href='https://google.com'>Link</Button>
       <Button disabled variant='contained'>Disabled</Button>
    </Stack>

{/* //for remove shadow */}
     <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
       <Button variant='contained' disableElevation>Contained (without shadow)</Button>
     </Stack>


    {/* //for color */}
     <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
        <Button color='primary' variant='contained'>Primary</Button>
        <Button color='secondary' variant='contained'>Secondary</Button>
        <Button  color='info' variant='contained'>info</Button>

        <Button color='error' variant='contained'>error</Button>

        <Button color='warning' variant='contained'>warning</Button>
        <Button color='success' variant='contained'>Success</Button>
       {/* same color property, you can apply for variant ="text/no varient" */}

     </Stack>

     {/* //for size of button */}
     <Stack direction="row" display="block" spacing={2} sx={{mt:4,ml:3}}>
        <Button size='large' variant='contained' > Large</Button>
        <Button size='medium' variant='contained' > Medium</Button>
        <Button size='small' variant='outlined' > small</Button>
     </Stack>

     {/* {Buttons with icons and label} */}
     <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
        <Button variant='contained' color='error' startIcon={<DeleteForeverIcon/>} >Delete</Button>
        <Button variant='contained'  color="success" endIcon={<SendIcon/>}>Send</Button>
     </Stack>

     {/* //Icon Button */}
     <Stack direction="row" spacing={2} sx={{mt:4,ml:3}}>
        <IconButton color='error' aria-label='delete'>
        <DeleteForeverIcon/>
        </IconButton>
        <IconButton color='success' aria-label='send'  onClick={()=>{alert("hello i am onclick event")}}>
        <SendIcon fontSize='large'/>
        </IconButton>
     </Stack>


     {/* //button Group */}
     <Stack sx={{mt:4,ml:3 }} direction="row"  >
        <ButtonGroup   variant='contained'  disableElevation size='large'  color='secondary' aria-label='Button-group'>
            <Button >pre</Button>
            <Button>next</Button>
        </ButtonGroup>

        <ButtonGroup   variant='outlined' orientation='vertical' sx={{ml:3}}   disableElevation aria-label='button-group-verticle'>
            <Button >pre</Button>
            <Button>next</Button>
        </ButtonGroup>
     </Stack>

     {/* //toggleButton */}
     <Stack sx={{mt:4,ml:3}}>
      <ToggleButtonGroup aria-label='toggle-button-select' onChange={handleToggle}  value={toggleButtonValue}>
      <ToggleButton value="underline" aria-label='underline'>underline</ToggleButton>
      <ToggleButton value="bold" aria-label='bold'>bold</ToggleButton>
      <ToggleButton value="italic" aria-label='italic'>italic</ToggleButton>
      </ToggleButtonGroup>
      </Stack>

    </>
  )
}

export default MuiButton