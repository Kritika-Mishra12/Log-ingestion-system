import { readLogs, writeLogs } from '../utils/fileUtils.js';
import { validateLog } from '../validators/logValidator.js';

export const ingestLog = async (req, res) => {
  const log = req.body;
  const { valid, message } = validateLog(log);

  if (!valid) return res.status(400).json({ error: message });

  try {
    const logs = await readLogs();
    logs.push(log);
    await writeLogs(logs);
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: 'Failed to store log.' });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = await readLogs();
    let filtered = logs;

    const {
      level, message, resourceId,
      timestamp_start, timestamp_end,
      traceId, spanId, commit
    } = req.query;

    if (level) filtered = filtered.filter(log => log.level === level);
    if (message) filtered = filtered.filter(log => log.message.toLowerCase().includes(message.toLowerCase()));
    if (resourceId) filtered = filtered.filter(log => log.resourceId === resourceId);
    if (traceId) filtered = filtered.filter(log => log.traceId === traceId);
    if (spanId) filtered = filtered.filter(log => log.spanId === spanId);
    if (commit) filtered = filtered.filter(log => log.commit === commit);
    if (timestamp_start || timestamp_end) {
      filtered = filtered.filter(log => {
        const ts = new Date(log.timestamp).getTime();
        return (!timestamp_start || ts >= new Date(timestamp_start).getTime()) &&
               (!timestamp_end || ts <= new Date(timestamp_end).getTime());
      });
    }

    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.status(200).json(filtered);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve logs.' });
  }
};
