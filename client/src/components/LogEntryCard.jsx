import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const getColor = (level) => {
  switch (level) {
    case 'error': return '#f44336'; // red
    case 'warn': return '#ff9800';  // orange
    case 'info': return '#2196f3';  // blue
    case 'debug': return '#9e9e9e'; // grey
    default: return '#e0e0e0';      // light grey
  }
};

const LogEntryCard = ({ log }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        borderLeft: `6px solid ${getColor(log.level)}`,
        mb: 2,
        p: 2,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography variant="caption" color="text.secondary" gutterBottom>
        {log.timestamp}
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={getColor(log.level)}>
        {log.level.toUpperCase()}
      </Typography>

      <Typography variant="body1" mb={1}>
        {log.message}
      </Typography>

      <Box sx={{ fontSize: 14 }}>
        <strong>Resource ID:</strong> {log.resourceId} <br />
        <strong>Trace ID:</strong> {log.traceId} <br />
        <strong>Span ID:</strong> {log.spanId} <br />
        <strong>Commit:</strong> {log.commit} <br />
        <strong>Metadata:</strong> {JSON.stringify(log.metadata)}
      </Box>
    </Paper>
  );
};

export default LogEntryCard;
