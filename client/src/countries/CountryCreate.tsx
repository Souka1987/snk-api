import * as React from 'react';
import {
    Create,
    DateInput,
    SimpleForm,
    TextInput,
    useTranslate,
    PasswordInput,
    email,
    CreateBase,
    Form,
    Toolbar,
} from 'react-admin';
import { Box, Card, CardContent, Container, CssBaseline, Grid, Typography } from '@mui/material';

import { CountryInput } from './CountryInput';
import { Country } from '../types';
import AvatarField from './AvatarField';

// export const validateForm = (
//     values: Record<string, any>
// ): Record<string, any> => {
//     const errors = {} as any;
//     if (!values.first_name) {
//         errors.first_name = 'ra.validation.required';
//     }
//     if (!values.last_name) {
//         errors.last_name = 'ra.validation.required';
//     }
//     if (!values.email) {
//         errors.email = 'ra.validation.required';
//     } else {
//         const error = email()(values.email);
//         if (error) {
//             errors.email = error;
//         }
//     }
//     if (values.password && values.password !== values.confirm_password) {
//         errors.confirm_password =
//             'resources.countries.errors.password_mismatch';
//     }
//     return errors;
// };

const CountryCreate = () => (
    <Container sx={{ maxWidth: { xl: 1280 } }}>
        <CssBaseline />
        <CreateBase
            redirect="show"
            transform={(data: Country) => ({
                ...data,
                last_seen: new Date(),
                segments: [],
            })}
        >

            <Box mt={2} display="flex">
                <Box flex="1">
                    <Form >
                        <Card>
                            <CardContent>
                                <Box>
                                    <Box display="flex">
                                        <Box mr={2}>
                                            <AvatarField />
                                        </Box>
                                        <Grid container width={{ xs: '100%', xl: 800 }} spacing={2}>
                                                <CountryInput />
                                        </Grid>
                                    </Box>
                                </Box>
                            </CardContent>
                            <Toolbar />
                        </Card>
                    </Form >
                </Box>
            </Box>
        </CreateBase>
    </Container >
);

export default CountryCreate;
