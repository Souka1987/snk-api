import * as React from 'react';
import {
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    TextInput,
} from 'react-admin';
import { InputAdornment, Grid } from '@mui/material';
import { Container, CssBaseline } from '@mui/material';

export const PlanetEditDetails = () => (
    <Container sx={{ maxWidth: { xl: 1280 } }}>
        <CssBaseline />
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={8}>
                <TextInput sx={{ mt: 1 }} source="reference" fullWidth validate={req} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <SelectInput source="category_id" choices={[
                    { id: "space", name: "Space" },
                    { id: "animals", name: "Animals" },
                    { id: "cities", name: "Cities" },
                    { id: "landscape", name: "Landscape" },
                    { id: "people", name: "People" },
                    { id: "civilizations", name: "Civilizations" },
                    { id: "nature", name: "Nature" },
                ]} />
                {/* <ReferenceInput source="category_id" reference="categories">
                    <SelectInput source="name" validate={req} fullWidth />
                </ReferenceInput> */}
            </Grid>
            <Grid item xs={12} sm={4}>
                <NumberInput
                    source="width"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">cm</InputAdornment>
                        ),
                    }}
                    validate={req}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <NumberInput
                    source="height"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">cm</InputAdornment>
                        ),
                    }}
                    validate={req}
                    fullWidth
                />
            </Grid>
            <Grid item xs={0} sm={4}></Grid>
            <Grid item xs={12} sm={4}>
                <TextInput
                    source="author"
                    fullWidth
                />
            </Grid>
        </Grid>
    </Container>
);

const req = [required()];
