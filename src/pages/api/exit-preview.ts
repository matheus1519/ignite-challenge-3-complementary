import { NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (_, res: NextApiResponse): Promise<void> => {
  res.clearPreviewData();

  res.writeHead(307, { Location: '/' });
  res.end();
};
