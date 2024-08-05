import { Typography } from '@mui/material'
import React from 'react'

//this is example for typoGraphy
//  ++++++++++++++++++++++ varient+++++++++++++++++++++++


// varient h1 to h6 is same like h1 to h6 in html
// varient subtitle1 and subtitle2 is like h6 but subtitle is bit big and bolder than subtitl2

//Note :-   h6: Use this for section headings or important titles that need to stand out.
// subtitle1: Use this for subtitles or secondary headings that support primary content, providing additional context.
// subtitle2: Use this for less prominent subtitles or descriptions that are supportive but not as visually demanding.
  

//    +++++++++++++++++++++++++++++gutterBottom+++++++++++++++++++++++++++++++++++++++
//gutterBottom :- n Material-UI (MUI), the gutterBottom prop is used with the Typography component to add spacing below the text. When gutterBottom is set to true, the component automatically adds a bottom margin, typically equal to the spacing unit defined in the theme (often 0.35em or 16px, depending on the MUI version and theme settings). This helps in creating consistent spacing and alignment between elements on the page.


// ++++++++++++++++++++++++++++++++++component+++++++++++++++++++++++++++++++++++++
// it is useful for changing the semantic meaning like :-
{/* <Typography variant='h1' component="h4" >  changing the semantic elements</Typography>  means it become h4 (when you are inspect) but its behave like h1 */}

//+++++++++++++++++++++++++++++++++++++++sx++++++++++++++++++++++++++++++++++++++++++++++++++++

// In Material-UI (MUI), the sx prop is a powerful utility for styling components. It allows you to apply custom styles directly to a component using a syntax that is consistent with the MUI system's design tokens, such as spacing, colors, typography, and more.


//Note for more in depth follow  componet api
// follow this link :- https://mui.com/material-ui/api/typography/

function MuiTypoGraphy() {
  return (
     <div>
     <Typography variant='h1' gutterBottom  align='left'> hello i am h1</Typography>
     <Typography variant='h2' gutterBottom> hello i am h2</Typography>
     <Typography variant='h3' gutterBottom> hello i am h3</Typography>
     <Typography variant='h4' gutterBottom> hello i am h4</Typography>
     <Typography variant='h5' gutterBottom> hello i am h5</Typography>
     <Typography variant='h6' gutterBottom> hello i am h6</Typography>
     <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom >
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant='h1' component="h4"  sx={{marginTop:"400px",color:'orange'}}>  changing the semantic elements</Typography>
     </div>
  )
}

export default MuiTypoGraphy