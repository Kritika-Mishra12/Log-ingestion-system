export const validateLog = (log) => {
  const requiredFields = ['level', 'message', 'resourceId', 'timestamp', 'traceId', 'spanId', 'commit', 'metadata'];
  const allowedLevels = ['error', 'warn', 'info', 'debug'];

  for (const field of requiredFields) {
    if (!(field in log)) return { valid: false, message: `Missing field: ${field}` };
  }

  if (!allowedLevels.includes(log.level)) {
    return { valid: false, message: `Invalid level: ${log.level}` };
  }

  if (isNaN(Date.parse(log.timestamp))) {
    return { valid: false, message: 'Invalid timestamp format' };
  }

  return { valid: true };
};
