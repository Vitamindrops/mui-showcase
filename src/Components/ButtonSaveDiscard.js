import React from "react";
import Button  from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


function ButtonSaveDiscard(){
    return(
<ButtonGroup size='medium' variant='contained' color='primary'>
<Button 
startIcon={<SaveIcon /> }>
Save
</Button>
<Button 
startIcon={<DeleteIcon /> }>
Discard
</Button>
</ButtonGroup>
)}

export default ButtonSaveDiscard;