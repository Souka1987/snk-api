import { Avatar, Box, Container, CssBaseline, Grid } from '@mui/material';
import * as React from 'react';
import {
    // ArrayField,
    // BooleanField,
    // CloneButton,
    // ChipField,
    // Datagrid,
    // DateField,
    // EditButton,
    // NumberField,
    // ReferenceArrayField,
    // ReferenceManyField,
    // RichTextField,
    // SelectField,
    ShowContextProvider,
    ShowView,
    // SingleFieldList,
    Tab,
    TabbedShowLayout,
    TextField,
    // UrlField,
    useShowController,
    useLocaleState,
    // useRecordContext,
} from 'react-admin';
import AvatarField2 from './AvatarField2';
import ButtonLink from './ButtonLink';
import CountryTitle from './CountryTitle';
import ImageField from './ImageField';
import SegmentsField from './SegmentsField';
import Timelines from './Timelines'

// const CreateRelatedComment = () => {
//     const record = useRecordContext();
//     return (
//         <CloneButton
//             resource="comments"
//             label="Add comment"
//             record={{ post_id: record.id }}
//         />
//     );
// };

const CountryShow = () => {
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
                                    <AvatarField2 />
                                </Grid>
                                <Grid item xs={2}>
                                    <ImageField />
                                </Grid>
                            </Grid>
                            <TextField source="id" />
                            <TextField source="country_name" />
                            <TextField source="also_known_as" />
                            <TextField source="capital" />
                            <TextField source="currency" />
                            {controllerProps.record &&
                                controllerProps.record.title ===
                                'Fusce massa lorem, pulvinar a posuere ut, accumsan ac nisi' && (
                                    <TextField source="teaser" />
                                )}
                        </Tab>
                        <Tab label="resources.form.infos">
                            <TextField source="head_of_state" />
                            <TextField source="head_of_government" />
                            <TextField source="people" />
                            <TextField source="official_language" />
                            <TextField source="form_of_government" />
                            <SegmentsField label="Tags"/>
                        </Tab>

                        <Tab label="resources.form.body">
                            <TextField source="description" />
                            <TextField source="history" />                                                                         
                            <ButtonLink />
                            <Timelines />
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

export default CountryShow;
