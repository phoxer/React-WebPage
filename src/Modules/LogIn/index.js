import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const LogIn = () => {
    const [open, setOpen] = useState(false);

    return (<Dialog open={open}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
            
        </DialogContent>
    </Dialog>)
}

export default LogIn;