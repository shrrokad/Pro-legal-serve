import { Box, Paper, Text, createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
  sideBarmainBox: {
    width: '262px',
    height: '86vh',
    paddingTop: '30px',
    position: 'sticky',
    top: '100px'
  },
  companyDetailsTxt: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '17px',
    color: '#000',
    paddingLeft: '20px',
  },
  companyDetailsMainBox: {
    background: '#FAF6E7',
    width: '225px',
    height: '55px',
    borderRadius: '0 10px 10px 0',
    borderLeft: '5px solid #E4C441',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor:'pointer',
  }
}))

const SideBar = () => {
  const { classes } = useStyles();

  return (
    <Paper shadow="sm" className={classes.sideBarmainBox}>
      <Box>
        <Box className={classes.companyDetailsMainBox}>
          <Text fw={700} className={classes.companyDetailsTxt}>Company Details</Text>
        </Box>
      </Box>
    </Paper>
  )
}

export default SideBar
