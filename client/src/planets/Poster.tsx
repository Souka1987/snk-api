import * as React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Planet } from '../types';

const Poster = () => {
    const record = useRecordContext<Planet>();
    if (!record) return null;
    return (
        <Card sx={{ display: 'inline-block' }}>
            <CardMedia
                component="img"
                image={record.image}
                alt=""
                sx={{ maxWidth: '45em', maxHeight: '15em' }}
            />
        </Card>
    );
};

export default Poster;

