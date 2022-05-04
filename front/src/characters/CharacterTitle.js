import * as React from 'react';
import { useTranslate, useRecordContext } from 'react-admin';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const translate = useTranslate();
    const record = useRecordContext();
    return (
        <span>
            {record
                ? translate('character.edit.first_name', { first_name: record.first_name })
                : ''}
        </span>
    );
};
