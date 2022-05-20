import * as React from 'react';
import {
    AutocompleteInput,
    DateInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
} from 'react-admin';
import { Country } from '../types';

const reviewFilters = [
    <SearchInput source="q" alwaysOn />,
    <SelectInput
        source="status"
        choices={[
            { id: 'accepted', name: 'Accepted' },
            { id: 'pending', name: 'Pending' },
            { id: 'rejected', name: 'Rejected' },
        ]}
    />,
    <ReferenceInput source="country_id" reference="countries">
        <AutocompleteInput
            optionText={(choice?: Country) =>
                choice?.id // the empty choice is { id: '' }
                    ? `${choice.country_name}`
                    : ''
            }
        />
    </ReferenceInput>,
    <ReferenceInput source="planet_id" reference="planets">
        <AutocompleteInput optionText="reference" />
    </ReferenceInput>,
    <DateInput source="date_gte" />,
    <DateInput source="date_lte" />,
];

export default reviewFilters;
