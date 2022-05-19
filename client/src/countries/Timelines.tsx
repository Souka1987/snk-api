import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Country } from '../types';
import { FieldProps, useRecordContext } from 'react-admin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimelineIcon from '@mui/icons-material/Timeline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

interface Props extends FieldProps<Country> {
  sx?: Props;
  size?: string;
}

export default function Timelines() {
  const record = useRecordContext<Country>();
  if (!record) return null;
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Start
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CalendarMonthIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {`${record.title1}`}
          </Typography>
          <Typography> {`${record.info1}`}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <AccessTimeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {`${record.title2}`}
          </Typography>
          <Typography>{`${record.info2}`}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <TimelineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {`${record.title3}`}
          </Typography>
          <Typography>{`${record.info3}`}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot>
            <EventAvailableIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {`${record.title4}`}
          </Typography>
          <Typography>{`${record.info4}`}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}  />
          <TimelineDot color="secondary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {`${record.title5}`}
          </Typography>
          <Typography>{`${record.info5}`}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
