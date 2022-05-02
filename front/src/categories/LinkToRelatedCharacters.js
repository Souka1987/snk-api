import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { stringify } from 'query-string';

import characters from '../characters';

const LinkToRelatedCustomers = ({ category }) => {
    const translate = useTranslate();
    return (
        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: '/characters',
                search: stringify({
                    filter: JSON.stringify({ groups: category }),
                }),
            }}
            state={{ _scrollToTop: true }}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
            }}
        >
            <characters.icon sx={{ paddingRight: '0.5em' }} />
            {translate('resources.categories.fields.characters')}
        </Button>
    );
};

export default LinkToRelatedCustomers;