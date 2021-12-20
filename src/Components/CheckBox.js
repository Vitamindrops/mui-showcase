import React from "react";
import  Checkbox  from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
    control={<Checkbox
      checked={checked}
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon />}
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
     />}
     label='Testing Checkbox'
    />
    )
  }
 export default CheckboxExample;

