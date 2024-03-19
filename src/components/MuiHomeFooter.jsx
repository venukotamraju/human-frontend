import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function MuiHomeFooter() {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: "auto",
        p: 3,
        bottom:0,
        position:"fixed",
        width:"100%"
      }}
    >
      <Container style={{ textAlign: "center" }} maxWidth="xl" >
        <Typography variant="body2" color="inherit">
          Copyright ©2024. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default MuiHomeFooter
