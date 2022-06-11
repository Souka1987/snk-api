import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { stringify } from 'query-string';
import PublicIcon from '@mui/icons-material/Public';

// import countries from '../countries';

const LinkToRelatedCountry = ({ segment }: { segment: string }) => {
    const translate = useTranslate();
    return (
        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: '/countries',
                search: stringify({
                    filter: JSON.stringify({ groups: segment }),
                }),
            }}
            state={{ _scrollToTop: true }}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
            }}
        >
            <PublicIcon sx={{ paddingRight: '0.5em' }} />
            {translate('resources.segments.fields.countries')}
        </Button>
    );
};

export default LinkToRelatedCountry;
