import * as React from 'react';
import { Create, FormTab, TabbedForm, TextInput, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { PlanetEditDetails } from './PlanetEditDetails';
import { Container, CssBaseline } from '@mui/material';

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
                            autoFocus
                            source="image"
                            fullWidth
                            validate={required()}
                        />
                        <TextInput
                            source="thumbnail"
                            fullWidth
                            validate={required()}
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
                        <RichTextInput source="description" label="" />
                    </FormTab>
                </TabbedForm>
            </Create>
        </Container>
    );
};

export default PlanetCreate;
