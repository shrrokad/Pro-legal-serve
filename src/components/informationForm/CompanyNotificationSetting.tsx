import React from 'react'
import { Box, TextInput, Title, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    companyTxtInput: {
        width: '35%',
        '& .mantine-TextInput-label': {
            color: '#ADADAD',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
        },
        '& .mantine-TextInput-input': {
            border: 'none',
            padding: '0',
            color: '#000',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '25px',
            fontWeight: 'bolder',
            marginTop: '5px'
        }
    },
    inputGroupBox: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '35px',
    }
}))

const CompanyNotificationSetting = ({ companyDetailsData }: any) => {
    const { classes } = useStyles();


    return (
        <>
            <Box>
                <Title order={1}>Company notification settings</Title>
            </Box>
            <Box style={{ marginTop: '35px', width: '736px' }}>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="New user invited"
                        label="New user invited"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.newUserInvite}
                    />
                    <TextInput
                        placeholder="New user added"
                        label="New user added"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.newUserAdded}
                    />
                    <TextInput
                        placeholder="Payment method changed"
                        label="Law firm or buisness name"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.paymentMethode}
                    />
                </Box> 
            </Box>
        </>
    )
}

export default CompanyNotificationSetting
