import * as React from 'react';
import {
    NumberField,
    TextField,
    DateField,
    useTranslate,
    useGetList,
    RecordContextProvider,
    ReferenceField,
    useLocaleState,
    useRecordContext,
} from 'react-admin';
import {
    Typography,
    Card,
    CardContent,
    Box,
    Link,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Grid,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// import order from '../orders';
// import review from '../reviews';
// import StarRatingField from '../reviews/StarRatingField';
import {
    Order as OrderRecord,
    Review as ReviewRecord,
    Country,
} from '../types';

const Aside = () => {
    const record = useRecordContext<Country>();
    return (
        <Box width={400} display={{ xs: 'none', lg: 'block' }}>
            {record && <EventList />}
        </Box>
    );
};

const EventList = () => {
    const record = useRecordContext<Country>();
    const translate = useTranslate();
    const [locale] = useLocaleState();

    const { data: orders } = useGetList<OrderRecord>('commands', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'date', order: 'DESC' },
        filter: { customer_id: record.id },
    });
    const { data: reviews } = useGetList<ReviewRecord>('reviews', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'date', order: 'DESC' },
        filter: { customer_id: record.id },
    });

    return (
        <Box ml={2}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {translate('resources.countries.fieldGroups.history')}
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid item xs={6} display="flex" gap={1}>
                            <AccessTimeIcon fontSize="small" color="disabled" />
                            <Box flexGrow={1}>
                                <Typography variant="body2">
                                    {translate(
                                        'resources.countries.fields.first_seen'
                                    )}
                                </Typography>
                                <DateField
                                    record={record}
                                    source="first_seen"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} display="flex" gap={1}>
                            <AccessTimeIcon fontSize="small" color="disabled" />
                            <Box flexGrow={1}>
                                <Typography variant="body2">
                                    {translate(
                                        'resources.countries.fields.last_seen'
                                    )}
                                </Typography>
                                <DateField record={record} source="last_seen" />
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};
export default Aside;
