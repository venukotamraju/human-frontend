import { Box } from '@mui/material'
import React from 'react'
import MuiNavBar from '../components/MuiNavBar'
import { Outlet } from 'react-router-dom'
import MuiHomeFooter from '../components/MuiHomeFooter'

function MuiHomePage() {
  return (
    <Box>
        <MuiNavBar page='home' />
        <Outlet />
        <MuiHomeFooter />
    </Box>
  )
}

export default MuiHomePage
