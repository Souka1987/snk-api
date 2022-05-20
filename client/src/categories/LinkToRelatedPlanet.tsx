import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslate, useRecordContext } from 'react-admin';
import { stringify } from 'query-string';

import planets from '../planets';
import { Category } from '../types';

const LinkToRelatedPlanet = () => {
    const record = useRecordContext<Category>();
    const translate = useTranslate();
    if (!record) return null;
    return (
        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: '/planets',
                search: stringify({
                    filter: JSON.stringify({ category_id: record.id }),
                }),
            }}
            sx={{ display: 'inline-flex', alignItems: 'center' }}
        >
            <planets.icon sx={{ paddingRight: '0.5em' }} />
            {translate('resources.categories.fields.planets')}
        </Button>
    );
};

export default LinkToRelatedPlanet;
