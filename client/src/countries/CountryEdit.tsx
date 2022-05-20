import * as React from 'react';
import {
    Edit,
    // NullableBooleanInput,
    TextInput,
    SimpleForm,
    useTranslate,
} from 'react-admin';
import { Grid, Box, Typography, Container, CssBaseline } from '@mui/material';
// import { RichTextInput } from 'ra-input-rich-text';

import Aside from './Aside';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
    {
        value: 'GBP',
        label: '₤',
    },
    {
        value: 'RUB',
        label: '₽',
    },
];

const CountryEdit = () => {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCurrency(event.target.value);
    };
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
                                            id="outlined-select-currency"
                                            select
                                            label="Currency"
                                            value={currency}
                                            onChange={handleChange}
                                            helperText="Select currency"
                                            source="currency"
                                            isRequired
                                            fullWidth
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextInput>
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="head_of_state"
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Head of state"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="head_of_government"
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Head of government"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircle />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Box>
                                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <TextInput
                                            source="people"
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="People"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PeopleIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <TextInput
                                    source="official_language"
                                    fullWidth
                                    id="input-with-icon-textfield"
                                    label="Official language"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LanguageIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="form_of_government"
                                        fullWidth
                                        id="input-with-icon-textfield"
                                        label="Form of government"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountBalanceIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box mt="1em" />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        label='Flag'
                                        source="avatar"
                                        fullWidth
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FlagCircleIcon />
                                                </InputAdornment>
                                            ),
                                        }}
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
                                        label='Description'
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <DescriptionIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {/* <RichTextInput label='description' source="body" fullWidth /> */}
                                </Box>
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="history"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        label='History'
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <TimelineIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box mt="1em" />
                                <Box display={{ xs: 'block', sm: 'flex' }}>
                                    <TextInput
                                        source="link"
                                        fullWidth
                                        label='Link'
                                        id="input-with-icon-textfield"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <InsertLinkIcon />
                                                </InputAdornment>
                                            ),
                                        }}
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
