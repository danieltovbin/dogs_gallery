import * as React from 'react';
import { FC } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';

interface TopBarProps {
  children?: React.ReactNode
}


const TopBar: FC<TopBarProps> = ({ children }) => {


  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar>
        <Toolbar sx={{ backgroundColor: '#333333'}}>
          <MoreHorizIcon sx={{ fontSize: '60px', color: 'gray' }} />
          <Typography sx={{ marginLeft:'45%'}} variant="h6" component="div">
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default TopBar



