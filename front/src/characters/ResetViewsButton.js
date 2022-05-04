import { VisibilityOff } from '@mui/icons-material';
import * as React from 'react';

import { BulkUpdateButton } from 'react-admin';

const views = { views: 0 };

const ResetViewsButton = (props) => (
    <BulkUpdateButton
        {...props}
        label="Reset Views"
        data={views}
        icon={<VisibilityOff/>}
        mutationMode="pessimistic"
    />
);

export default ResetViewsButton;