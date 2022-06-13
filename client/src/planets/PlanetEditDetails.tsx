import * as React from 'react';
import {
    required,
    SelectInput,
    TextInput,
} from 'react-admin';
import { InputAdornment, Grid, Link } from '@mui/material';
import { Container, CssBaseline } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { AccountCircle } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';

export const PlanetEditDetails = () => (
    <Container sx={{ maxWidth: { xl: 1280 } }}>
        <CssBaseline />
        <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={8}>
                <TextInput
                    source="reference"
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Reference"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <SelectInput source="category_id" fullWidth validate={required()} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CategoryIcon />
                        </InputAdornment>
                    ),
                }} choices={[
                    { id: "🦘 animals", name: "🦘 Animals" },
                    { id: "🌆 cities", name: "🌆 Cities" },
                    { id: "🖼️ landscape", name: "🖼️ Landscape" },
                    { id: "🧑 people", name: "🧑 People" },
                    { id: "🌱 nature", name: "🌱 Nature" },
                    { id: "🏛️ politics", name: "🏛️ Politics" },
                    { id: "🧬 science", name: "🧬 Science" },
                    { id: "🎥 cinema", name: "🎥 Cinema" },
                    { id: "🏺 history", name: "🏺 History" },
                    { id: "💢 manga", name: "💢 Manga" },
                ]} />
            </Grid>
            <Grid item xs={0} sm={4}>
                <TextInput
                    source="author"
                    fullWidth
                    label='Source'
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <InsertLinkIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>

        </Grid>
    </Container>
);

const req = [required()];