import * as React from 'react';
import { Fragment } from 'react';
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
    useCreatePath,
    ReferenceField,
    FunctionField,
    TextField,
    useRecordContext,
} from 'react-admin';

import AvatarField from '../countries/AvatarField';
import { Review, Country } from './../types';

export const ReviewItem = () => {
    const record = useRecordContext<Review>();
    const createPath = useCreatePath();
    if (!record) {
        return null;
    }
    return (
        <MuiLink
            to={createPath({
                resource: 'reviews',
                type: 'edit',
                id: record.id,
            })}
            component={Link}
            underline="none"
            color="inherit"
        >
            <ListItem button>
                <ListItemAvatar>
                    {/* <ReferenceField
                        source="customer_id"
                        reference="customers"
                        link={false}
                    >
                        <AvatarField size="40" />
                    </ReferenceField> */}
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Fragment>
                            <ReferenceField
                                source="country_id"
                                reference="countries"
                                link={false}
                            >
                                <FunctionField
                                    render={(record?: Country) =>
                                        record
                                            ? `${record.country_name}`
                                            : ''
                                    }
                                    variant="subtitle1"
                                />
                            </ReferenceField>{' '}
                            on{' '}
                            <ReferenceField
                                source="planet_id"
                                reference="planets"
                                link={false}
                            >
                                <TextField
                                    source="reference"
                                    variant="subtitle1"
                                />
                            </ReferenceField>
                        </Fragment>
                    }
                    secondary={record.comment}
                    secondaryTypographyProps={{ noWrap: true }}
                />
            </ListItem>
        </MuiLink>
    );
};
