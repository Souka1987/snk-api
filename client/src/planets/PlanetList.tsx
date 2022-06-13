import * as React from 'react';
import { Box, Chip, useMediaQuery, Theme } from '@mui/material';
import {
    CreateButton,
    ExportButton,
    FilterButton,
    FilterForm,
    FilterContext,
    InputProps,
    ListBase,
    Pagination,
    ReferenceInput,
    SearchInput,
    SelectInput,
    SortButton,
    Title,
    TopToolbar,
    useTranslate,
    useGetResourceLabel,
} from 'react-admin';

import ImageList from './GridList';
// import Aside from './Aside';
import { Container, CssBaseline } from '@mui/material';

const PlanetList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
            <ListBase perPage={24} sort={{ field: 'reference', order: 'ASC' }}>
                <Title defaultTitle={getResourceLabel('planets', 2)} />
                <FilterContext.Provider value={planetFilters}>
                    <ListActions isSmall={isSmall} />
                    {isSmall && (
                        <Box m={1}>
                            <FilterForm />
                        </Box>
                    )}
                </FilterContext.Provider>
                <Box display="flex">
                    {/* <Aside /> */}
                    <Box width={isSmall ? 'auto' : 'calc(100% - 16em)'}>
                        <ImageList />
                        <Pagination rowsPerPageOptions={[12, 24, 48, 72]} />
                    </Box>
                </Box>
            </ListBase>
        
    );
};

const QuickFilter = ({ label }: InputProps) => {
    const translate = useTranslate();
    return <Chip sx={{ mb: 1 }} label={translate(label as string)} />;
};

export const planetFilters = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput
        source="category_id"
        reference="categories"
        sort={{ field: 'id', order: 'ASC' }}
    >
        <SelectInput source="name" />
    </ReferenceInput>,

];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        <SortButton fields={['reference']} />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export default PlanetList;
