import React, { useState } from 'react';
import FilterBar from './components/FilterBar';
import LogTable from './components/LogTable';
import { useLogs } from './hooks/useLogs';

import { Container, Typography, Box } from '@mui/material';

const App = () => {
  const [filters, setFilters] = useState({
    message: '',
    level: '',
    resourceId: '',
    timestamp_start: '',
    timestamp_end: '',
  });

  const { logs, loading } = useLogs(filters);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Log Ingestion Dashboard
      </Typography>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <Box mt={3}>
        {loading ? <Typography>Loading logs...</Typography> : <LogTable logs={logs} />}
      </Box>
    </Container>
  );
};

export default App;
