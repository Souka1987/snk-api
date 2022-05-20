import * as React from 'react';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Planet } from '../types';

const PlanetRefField = () => {
    const record = useRecordContext<Planet>();
    return record ? (
        <MuiLink
            component={Link}
            to={`/planets/${record.id}`}
            underline="none"
        >
            {record.reference}
        </MuiLink>
    ) : null;
};

PlanetRefField.defaultProps = {
    source: 'id',
    label: 'Reference',
};

export default PlanetRefField;
