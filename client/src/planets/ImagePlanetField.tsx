import * as React from 'react';
import { Avatar, SxProps } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';
import { Planet } from '../types';

interface Props extends FieldProps<Planet> {
    sx?: SxProps;
    size?: string;
}

const ImagePlanetField = ({ size = '300', sx }: Props) => {
    const record = useRecordContext<Planet>();
    if (!record) return null;
    return (
        <Avatar
        variant="rounded"
            src={`${record.image}?size=${size}x${size}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            sx={sx}
        />
    );
};

export default ImagePlanetField;
