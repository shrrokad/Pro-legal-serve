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

const LawFirmInformation = ({ companyDetailsData }: any) => {
    const { classes } = useStyles();

    return (
        <>
            <Box>
                <Title order={1}>Law firm information</Title>
            </Box>
            <Box style={{ marginTop: '35px', width: '736px' }}>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="Firm speciality"
                        label="Firm speciality"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.firmSpeciality}
                    />
                    <TextInput
                        placeholder="Case managment"
                        label="Case managment"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.caseManagement}
                    />
                </Box>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="Account manager"
                        label="Account manager"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.accountManager}
                    />
                </Box>
            </Box>
        </>
    )
}

export default LawFirmInformation
