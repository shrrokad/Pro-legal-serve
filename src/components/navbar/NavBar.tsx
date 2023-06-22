import { Avatar, Box, Image, Paper, Text, createStyles } from '@mantine/core'
import React from 'react'
import Logo from '../../assets/Pro-Legal-Serve-Logo 1.png'
import NotificationImg from '../../assets/notification.png'
import AvtarManImg from '../../assets/ProfileImg.png'
import dwonArrow from '../../assets/downArrow.png'

const useStyles = createStyles((theme) => ({
  mainNavbarBox: {
    width: '100%',
    height: '100px',
    padding: '0 20px',
    paddingRight: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 99
  },
  notificationImg: {
    border: '0.25px solid #000000',
    boxShadow: '2px 2px 10px 0px #0000000D',
    borderRadius: '50px',
    padding: '12.7px 14.5px',
    cursor: 'pointer'
  },
  RightSIdesetting: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px'
  },
  profileSetting: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    cursor: 'pointer'
  },
  profileNameSetting: {
    display: 'flex',
    alignItems: 'center'
  },
  userNameTxt: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '18px',
  },
  descriptionNameTxt: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '15px',
    color: '#808080',
  }
}))

const NavBar = () => {
  const { classes } = useStyles();
  return (
    <Paper shadow="sm" style={{ zIndex: '99px' }} className={classes.mainNavbarBox}>
      <Box>
        <Image width={202} height={58} src={Logo} alt="Random image" />
      </Box>
      <Box className={classes.RightSIdesetting}>
        <Box className={classes.notificationImg}>
          <Image width={20} height={23.16} src={NotificationImg} alt='NotificationImg' />
        </Box>
        <Box className={classes.profileSetting}>
          <Box>
            <Avatar style={{ width: '50px', height: '50px' }} src={AvtarManImg} alt="it's me" />
          </Box>
          <Box>
            <Box className={classes.profileNameSetting}>
              <Text fw={500} className={classes.userNameTxt}>John Deo</Text>
              <Image width={11} height={11} pl={5} src={dwonArrow} />
            </Box>
            <Box>
              <Text fw={500} className={classes.descriptionNameTxt}>Server</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default NavBar
