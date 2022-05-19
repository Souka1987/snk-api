import * as React from 'react';
import {
    Edit,
    NullableBooleanInput,
    TextInput,
    SimpleForm,
    useTranslate,
} from 'react-admin';
import { Grid, Box, Typography, Container, CssBaseline } from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';

import Aside from './Aside';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
// import { validateForm } from './CountryCreate';

const CountryEdit = () => {
    const translate = useTranslate();
    return (
        <Container sx={{ maxWidth: { xl: 1380 } }}>
            <CssBaseline />
            <Edit redirect="show" title={<CountryTitle />} aside={<Aside />}>
                <SimpleForm >
                    <div>
                        <Grid container width={{ xs: '100%', xl: 800 }} spacing={2}>
                            <Grid item xs={12} md={8}>
                                <Typography variant="h6" gutterBottom>
                                    {translate(
                                        'resources.countries.fieldGroups.informations'
                                    )}
                                </Typography>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="country_name"
                                            isRequired
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="also_known_as"
                                            fullWidth
                                        />
                                    </Box>
                                </Box>

                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="capital"
                                            isRequired
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="currency"
                                            isRequired
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="head_of_state"
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="head_of_government"
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="people"
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                                <TextInput
                                    source="official_language"
                                    fullWidth
                                />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="form_of_government"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box mt="1em" />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        label='Flag'
                                        source="avatar"
                                        fullWidth
                                    />
                                </Box>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        label='Blazon'
                                        source="image"
                                        fullWidth
                                    />
                                </Box>
                                <Box mt="1em" />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="description"
                                        multiline
                                        rows={3}
                                        fullWidth
                                    />
                                    {/* <RichTextInput label='description' source="body" fullWidth /> */}
                                </Box>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="history"
                                        multiline
                                        rows={3}
                                        fullWidth
                                    />
                                </Box>
                                <Box mt="1em" />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="link"
                                        fullWidth
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>
                                    {translate(
                                        'resources.countries.fieldGroups.tags'
                                    )}
                                </Typography>
                                <SegmentsInput fullWidth />
                                {/* <NullableBooleanInput
                                fullWidth
                                source="has_newsletter"
                            /> */}
                                <Typography variant="h6" gutterBottom>
                                    {translate(
                                        'resources.countries.fieldGroups.key_dates'
                                    )}
                                </Typography>
                                    <TextInput
                                        source="title1"
                                        fullWidth
                                    />
                                <TextInput
                                    source="info1"
                                    fullWidth
                                />
                                <TextInput
                                    source="title2"
                                    fullWidth
                                />
                                <TextInput
                                    source="info2"
                                    fullWidth
                                />
                                <TextInput
                                    source="title3"
                                    fullWidth
                                />
                                <TextInput
                                    source="info3"
                                    fullWidth
                                />
                                <TextInput
                                    source="title4"
                                    fullWidth
                                />
                                <TextInput
                                    source="info4"
                                    fullWidth
                                />
                                <TextInput
                                    source="title5"
                                    fullWidth
                                />
                                <TextInput
                                    source="info5"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </div>
                </SimpleForm>
            </Edit>
        </Container>
    );
};

const CountryTitle = () => <FullNameField size="32" sx={{ margin: '5px 0' }} />;

export default CountryEdit;
