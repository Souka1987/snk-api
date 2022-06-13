import { Avatar, Box, Container, CssBaseline, Grid, InputAdornment } from '@mui/material';
import * as React from 'react';

import {
    ShowContextProvider,
    ShowView,
    Tab,
    TabbedShowLayout,
    TextField,
    useShowController,
    useLocaleState,
    TextInput,
    ReferenceManyField,
    Datagrid,
    DateField,
    EditButton,
    useRecordContext,
    CloneButton,
} from 'react-admin';
import ButtonLink from './ButtonLink';
import ButtonLink2 from './ButtonLink2';
import ImagePlanetField from './ImagePlanetField';

const CreateRelatedComment = () => {
    const record = useRecordContext();
    return (
        <CloneButton
            resource="comments"
            label="Add comment"
            record={{ post_id: record.id }}
        />
    );
};

const PlanetShow = () => {
    const controllerProps = useShowController();
    const [locale] = useLocaleState();
    return (
        <Container sx={{ maxWidth: { xl: 1280 } }}>
            <CssBaseline />
            <ShowContextProvider value={controllerProps}>
                <ShowView>
                    <TabbedShowLayout>
                        <Tab label="resources.form.summary">
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={2}>
                                    <ImagePlanetField />
                                </Grid>
                            </Grid>
                            <TextField source="id" />
                            <TextField source="reference" />
                            <TextField source="category_id" />
                            <ButtonLink />
                            {controllerProps.record &&
                                controllerProps.record.title ===
                                'Fusce massa lorem, pulvinar a posuere ut, accumsan ac nisi' && (
                                    <TextField source="teaser" />
                                )}
                        </Tab>
                        {/* <Tab label="resources.form.infos">
                            
                        </Tab> */}

                        <Tab label="resources.form.body">
                            <TextField source="description" />
                            <ButtonLink2 />
                        </Tab>
                        {/* <Tab label="resources.form.comments">
                            <ReferenceManyField
                                reference="comments"
                                target="post_id"
                                sort={{ field: 'created_at', order: 'DESC' }}
                            >
                                <Datagrid>
                                    <DateField source="created_at" />
                                    <TextField source="author.name" />
                                    <TextField source="body" />
                                    <EditButton />
                                </Datagrid>
                            </ReferenceManyField>
                            <CreateRelatedComment />
                        </Tab> */}
                    </TabbedShowLayout>
                </ShowView>
            </ShowContextProvider>
        </Container>
    );
};

export default PlanetShow;
