import { useEffect, useState } from "react";
import axios from "axios";

export const useLogs = (filters) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams(filters).toString();
        const res = await axios.get(`http://localhost:3000/logs?${query}`);
        console.log("API response:", res.data);
        setLogs(res.data);
      } catch (error) {
        console.error("Failed to fetch logs", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchLogs, 500);
    return () => clearTimeout(debounce);
  }, [filters]);

  return { logs, loading };
};
