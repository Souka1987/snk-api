import * as React from 'react';
import { ReferenceField, ReferenceFieldProps, TextField } from 'react-admin';

interface Props {
    source?: string;
}

const PlanetReferenceField = (
    props: Props &
        Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>
) => (
    <ReferenceField
        label="Planet"
        source="planet_id"
        reference="planets"
        {...props}
    >
        <TextField source="reference" />
    </ReferenceField>
);

PlanetReferenceField.defaultProps = {
    source: 'planet_id',
};

export default PlanetReferenceField;
