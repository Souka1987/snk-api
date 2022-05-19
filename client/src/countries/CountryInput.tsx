import * as React from 'react';
import {
    TextInput,
    useTranslate
} from 'react-admin';
import { Box, Typography, Grid } from '@mui/material';
import SegmentsInput from './SegmentsInput';
// import { RichTextInput } from 'ra-input-rich-text';

const choices = [
    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
    { id: 456, first_name: 'Jane', last_name: 'Austen' },
];

export const CountryInput = () => {
    return (
        <>
            <Grid item xs={12} md={8}>
                <SectionTitle label="resources.countries.fieldGroups.informations" />
                <Box flex="1" mt={-1}>
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
                </Box>
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
                <SectionTitle label="resources.countries.fieldGroups.key_dates" />
                <TextInput
                    source="title1"
                    fullWidth />
                <TextInput
                    source="info1"
                    fullWidth />
                <TextInput
                    source="title2"
                    fullWidth />
                <TextInput
                    source="info2"
                    fullWidth />
                <TextInput
                    source="title3"
                    fullWidth />
                <TextInput
                    source="info3"
                    fullWidth />
                <TextInput
                    source="title4"
                    fullWidth />
                <TextInput
                    source="info4"
                    fullWidth />
                <TextInput
                    source="title5"
                    fullWidth />
                <TextInput
                    source="info5"
                    fullWidth />
            </Grid>
        </>
    )
}

const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label as string)}
        </Typography>
    );
};
