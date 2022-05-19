// in src/comments.js
import * as React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import {
    DateField,
    EditButton,
    useTranslate,
    NumberField,
    RecordContextProvider,
    useListContext,
} from 'react-admin';

import AvatarField from './AvatarField';
import ColoredNumberField from './ColoredNumberField';
import SegmentsField from './SegmentsField';
import { Country } from '../types';

const MobileGrid = () => {
    const translate = useTranslate();
    const { data, isLoading } = useListContext<Country>();

    if (isLoading || data.length === 0) {
        return null;
    }

    return (
        <Box margin="0.5em">
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Card sx={{ margin: '0.5rem 0' }}>
                        <CardHeader
                            title={`${record.country_name}`}
                            subheader={
                                <>
                                    {translate(
                                        'resources.countries.fields.last_seen_gte'
                                    )}
                                    &nbsp;
                                    <DateField source="last_seen" />
                                </>
                            }
                            avatar={<AvatarField size="100" />}
                            action={<EditButton />}
                        />
                        {/* <CardContent sx={{ pt: 0 }}>
                            <Typography variant="body2">
                                {translate(
                                    'resources.commands.name',
                                    record.nb_commands || 1
                                )}
                                :&nbsp;
                                <NumberField source="nb_commands" />
                            </Typography>
                            <Typography variant="body2">
                                {translate(
                                    'resources.countries.fields.total_spent'
                                )}
                                :&nbsp;
                                <ColoredNumberField
                                    source="total_spent"
                                    options={{
                                        style: 'currency',
                                        currency: 'USD',
                                    }}
                                />
                            </Typography>
                        </CardContent> */}
                        {record.groups && record.groups.length > 0 && (
                            <CardContent sx={{ pt: 0 }}>
                                <SegmentsField />
                            </CardContent>
                        )}
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};

export default MobileGrid;
