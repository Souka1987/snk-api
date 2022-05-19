import * as React from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';

import FullNameField from './FullNameField';

const CountryReferenceField = (
    props: Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }
) => (
    <ReferenceField source="country_id" reference="countries" {...props}>
        <FullNameField />
    </ReferenceField>
);

CountryReferenceField.defaultProps = {
    source: 'country_id',
};

export default CountryReferenceField;
