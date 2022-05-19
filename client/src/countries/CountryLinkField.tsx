import * as React from 'react';
import { Link, FieldProps, useRecordContext } from 'react-admin';

import FullNameField from './FullNameField';
import { Country } from '../types';

const CountryLinkField = (props: FieldProps<Country>) => {
    const record = useRecordContext<Country>();
    if (!record) {
        return null;
    }
    return (
        <Link to={`/countries/${record.id}`}>
            <FullNameField />
        </Link>
    );
};

CountryLinkField.defaultProps = {
    source: 'country_id',
};

export default CountryLinkField;
