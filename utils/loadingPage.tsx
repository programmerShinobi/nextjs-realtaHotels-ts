import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingPage(status: boolean) {
  
  const [open, setOpen] = useState(false);
  
  if (status) {
    // active  
    setOpen(!open);
  } else {
    // non active  
    setOpen(false);
  }
  
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}