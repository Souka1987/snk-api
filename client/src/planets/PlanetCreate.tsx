import * as React from 'react';
import { Create, FormTab, TabbedForm, TextInput, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { PlanetEditDetails } from './PlanetEditDetails';
import { Container, CssBaseline, InputAdornment } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const PlanetCreate = () => {
    return (
        <Container sx={{ maxWidth: { xl: 1280 } }}>
            <CssBaseline />
            <Create>
                <TabbedForm defaultValues={{ sales: 0 }}>
                    <FormTab
                        label="resources.planets.tabs.image"
                        sx={{ maxWidth: '40em' }}
                    >
                        <TextInput
                            source="image"
                            fullWidth
                            validate={required()}
                            label='Image'
                            id="input-with-icon-textfield"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <InsertPhotoIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextInput
                            source="thumbnail"
                            fullWidth
                            validate={required()}
                            label='Thumbnail'
                            id="input-with-icon-textfield"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <InsertPhotoIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormTab>
                    <FormTab
                        label="resources.planets.tabs.details"
                        path="details"
                        sx={{ maxWidth: '40em' }}
                    >
                        <PlanetEditDetails />
                    </FormTab>
                    <FormTab
                        label="resources.planets.tabs.description"
                        path="description"
                    >
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
                    </FormTab>
                </TabbedForm>
            </Create>
        </Container>
    );
};

export default PlanetCreate;
