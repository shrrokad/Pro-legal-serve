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

const CompanyInformation = ({ companyDetailsData }: any) => {
    const { classes } = useStyles();

    return (
        <>
            <Box>
                <Title order={1}>Company Information</Title>
            </Box>
            <Box style={{ marginTop: '35px', width: '736px' }}>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="Operating company"
                        label="Operating company"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.operatingCompany}
                    />
                    <TextInput
                        placeholder="Company type"
                        label="Company type"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.companyType}
                    />
                    <TextInput
                        placeholder="Law firm or buisness name"
                        label="Law firm or buisness name"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.LawFirmBussinessName}
                    />
                </Box>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="Address 1"
                        label="Address 1"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.address}
                    />
                </Box>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="State"
                        label="State"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.state}
                    />
                    <TextInput
                        placeholder="City"
                        label="City"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.City}
                    />
                    <TextInput
                        placeholder="Country"
                        label="Country"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.country}
                    />
                </Box>
                <Box className={classes.inputGroupBox}>
                    <TextInput
                        placeholder="Zip code"
                        label="Zip code"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.zipCode}
                    />
                    <TextInput
                        placeholder="Phone number"
                        label="Phone number"
                        className={classes.companyTxtInput}
                        value={companyDetailsData.phoneNumer}
                    />
                </Box>
            </Box>
        </>
    )
}

export default CompanyInformation
