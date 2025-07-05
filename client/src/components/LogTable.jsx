import React from 'react';
import LogEntryCard from './LogEntryCard';
import { Grid } from '@mui/material';

const LogTable = ({ logs }) => {
  return (
    <Grid container direction="column">
      {logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        logs.map((log, index) => (
          <Grid item key={index}>
            <LogEntryCard log={log} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default LogTable;
