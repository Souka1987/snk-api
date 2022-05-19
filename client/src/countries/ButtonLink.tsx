// import * as React from 'react';
// import Link from '@mui/material/Link';
// import { Country } from '../types';
// import { Avatar, SxProps } from '@mui/material';
// import { FieldProps, useRecordContext } from 'react-admin';

// interface Props extends FieldProps<Country> {
//     sx?: SxProps;
//     size?: string;
// }

// export default function ButtonLink() {
//     const record = useRecordContext<Country>();
//     if (!record) return null;
//     return (
//         <Link
//             component="button"
//             variant="body2"
//             onClick={() => {

//                 console.info("I'm a button.");
//             }}
//         >
//             {`${record.button}`}
//         </Link>
//     );
// }

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
            <Button variant="contained" startIcon={<InfoIcon />} href="#{`${record.link}`}">
                Read more 
            </Button>
        </Stack>
    );
}
