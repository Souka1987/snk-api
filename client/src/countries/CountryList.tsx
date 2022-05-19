import * as React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    List,
    NullableBooleanInput,
    SearchInput,
} from 'react-admin';
import { useMediaQuery, Theme, Container, CssBaseline } from '@mui/material';

import SegmentsField from './SegmentsField';
import SegmentInput from '../countries/SegmentsInput';
import CountryLinkField from './CountryLinkField';
import MobileGrid from './MobileGrid';
import CountryListAside from './CountryListAside';

const visitorFilters = [
    <SearchInput source="q" alwaysOn />,
    <DateInput source="last_seen_gte" />,
    <NullableBooleanInput source="has_ordered" />,
    // <NullableBooleanInput source="has_newsletter" defaultValue />,
    <SegmentInput source="groups" />,
];

const CountryList = () => {
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <Container sx={{ maxWidth: { xl: 1280 } }}>
            <CssBaseline />
            <List
                filters={isSmall ? visitorFilters : undefined}
                sort={{ field: 'last_seen', order: 'DESC' }}
                perPage={25}
                aside={<CountryListAside />}
            >
                {isXsmall ? (
                    <MobileGrid />
                ) : (
                    <Datagrid
            
                        style={{ height: 50, width: '100%' }}
                        optimized
                        rowClick="edit"
                        // sx={{
                        //     '& .column-groups': {
                        //         md: { display: 'none' },
                        //         lg: { display: 'table-cell' },
                        //     },
                        // }}
                    >
                        <CountryLinkField />
                        <DateField source="last_seen" />
                        {/* <BooleanField source="has_newsletter" label="News." /> */}
                        <SegmentsField source="groups" />
                    </Datagrid>
                )}
            </List>
        </Container>
    );
};

export default CountryList;
