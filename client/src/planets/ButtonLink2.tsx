import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FieldProps, useRecordContext } from 'react-admin';
import { Country } from '../types';
import InfoIcon from '@mui/icons-material/Info';

export default function ButtonLink() {
    const record = useRecordContext<Country>();
    if (!record) return null;
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<InfoIcon />} href={`${record.description}`} target="_blank">
                Source 👇
            </Button>
        </Stack>
    );
}
