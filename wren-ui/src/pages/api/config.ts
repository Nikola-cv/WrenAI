import type { NextApiRequest, NextApiResponse } from 'next';
import { getConfig } from '@/apollo/server/config';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const config = getConfig();

  res.status(200).json({
    isTelemetryEnabled: config.telemetryEnabled || false,
    telemetryHost: config.telemetryHttpEndpoint || '',
    userUUID: config.userUUID || '',
  });
}
