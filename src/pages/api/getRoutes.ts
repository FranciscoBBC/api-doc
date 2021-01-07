/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable consistent-return */
import type { NextApiRequest, NextApiResponse } from 'next';
import GetRoutes from '@models/service/GetRoutes';
import { getAllRoutes } from '../../utils/Fauna';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetRoutes>
) => {
  if (req.method !== 'GET') {
    return res.status(500).end();
  }

  try {
    const routes = await getAllRoutes();
    return res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ msg: 'database error' });
  }
};

export default handler;
