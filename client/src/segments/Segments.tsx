import * as React from 'react';
import {
    Card,
    Container,
    CssBaseline,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { useTranslate, Title } from 'react-admin';
import segments from './data';
import LinkToRelatedCountry from './LinkToRelatedCountry';

const Catalog = () => {
    const translate = useTranslate();
    return (
        <Container sx={{ maxWidth: { xl: 1280 } }}>
            <Card sx={{ mt: 8 }}>
                <Title
                    title={translate('resources.segments.name', { smart_count: 2 })}
                />
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {translate('resources.segments.fields.name')}
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {segments.map(segment => (
                            <TableRow key={segment.id}>
                                <TableCell>{translate(segment.name)}</TableCell>
                                <TableCell>
                                    <LinkToRelatedCountry segment={segment.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </Container>
    );
};

export default Catalog;
