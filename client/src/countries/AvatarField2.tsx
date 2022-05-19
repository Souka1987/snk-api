import * as React from 'react';
import { Avatar, SxProps } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';
import { Country } from '../types';

interface Props extends FieldProps<Country> {
    sx?: SxProps;
    size?: string;
}

const AvatarField2 = ({ size = '100', sx }: Props) => {
    const record = useRecordContext<Country>();
    if (!record) return null;
    return (
        <Avatar
            variant="square"
            src={`${record.avatar}?size=${size}x${size}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            sx={sx}
        />
    );
};

export default AvatarField2;
