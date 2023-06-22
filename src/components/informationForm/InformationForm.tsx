import { Box, Button, Paper, createStyles } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import CompanyInformation from './CompanyInformation';
import LawFirmInformation from './LawFirmInformation';
import CompanyNotificationSetting from './CompanyNotificationSetting';
import { IconArrowRight } from '@tabler/icons-react';
import axios from 'axios'

const useStyles = createStyles((theme) => ({
    formMainBox: {
        width: '82%',
        height: '1218px',
        marginTop: '15px',
        marginBottom: '15px',
        borderRadius: '20px 0 0 20px',
        boxShadow: '1px 15px 60px 0px #00000033',
        padding: '20px'
    },
    formSubBoxBorder: {
        border: '1px solid #E0E0E0',
        width: '100%',
        height: '1175px',
        borderRadius: '20px',
        padding: '40px 30px'
    },
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
        marginBottom: '25px',
    },
    companyInformationBottomBorder: {
        borderBottom: '3px dashed #ADADAD',
        marginBottom: '25px'
    },
    nextButton: {
        background: '#E4C441',
        color: '#000',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '17px',
    },
    ButtonMainBox: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

const InformationForm = () => {
    const { classes } = useStyles();
    const [companyDetails, setCompanyDetails] = useState()

    useEffect(() => {
        try {
            axios.get('http://localhost:3005/companyInformation')
                .then((response) => setCompanyDetails(response.data))
        } catch (error) {
            console.log(error, 'error');
        }
    }, [])

    return (
        <Paper shadow="sm" className={classes.formMainBox}>
            {companyDetails && (
                <Box className={classes.formSubBoxBorder}>
                    <Box className={classes.companyInformationBottomBorder}>
                        <CompanyInformation companyDetailsData={companyDetails} />
                    </Box>
                    <Box className={classes.companyInformationBottomBorder}>
                        <LawFirmInformation companyDetailsData={companyDetails} />
                    </Box>
                    <Box className={classes.companyInformationBottomBorder}>
                        <CompanyNotificationSetting companyDetailsData={companyDetails} />
                    </Box>
                    <Box className={classes.ButtonMainBox}>
                        <Button rightIcon={<IconArrowRight />} className={classes.nextButton}>
                            Next
                        </Button>
                    </Box>
                </Box>
            )}
        </Paper>
    )
}

export default InformationForm
