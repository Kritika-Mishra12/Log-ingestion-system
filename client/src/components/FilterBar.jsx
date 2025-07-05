import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  InputLabel,
  FormControl,
} from "@mui/material";

const FilterBar = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} md={3}>
        <TextField
          label="Search message"
          fullWidth
          name="message"
          value={filters.message}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6} md={2}>
        <FormControl fullWidth sx={{ minWidth: 120 }}>
          <InputLabel id="level-label">Level</InputLabel>
          <Select
            labelId="level-label"
            label="Level" // Needed to position the label correctly
            name="level"
            value={filters.level}
            onChange={(e) =>
              onFilterChange({ ...filters, level: e.target.value })
            }
            displayEmpty
            renderValue={(selected) => {
              if (selected === "") return "All"; // Show "All" when value is empty
              return selected.charAt(0).toUpperCase() + selected.slice(1);
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="error">Error</MenuItem>
            <MenuItem value="warn">Warning</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="debug">Debug</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} md={2}>
        <TextField
          label="Resource ID"
          fullWidth
          name="resourceId"
          value={filters.resourceId}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6} md={2}>
        <TextField
          label="Start Time"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="timestamp_start"
          value={filters.timestamp_start}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6} md={2}>
        <TextField
          label="End Time"
          type="datetime-local"
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="timestamp_end"
          value={filters.timestamp_end}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default FilterBar;
