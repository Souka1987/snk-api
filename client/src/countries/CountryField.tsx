import * as React from 'react';
import { useRecordContext } from 'react-admin';
import { Country } from '../types';

const CountryField = () => {
    const record = useRecordContext<Country>();

    return record ? (
        <span>
            {record.country_name}, {record.also_known_as}, {record.capital} {record.head_of_state}
        </span>
    ) : null;
};

export default CountryField;
