import { auth } from '../../../../auth';

export const GET: any = (req: Request) => auth(req as unknown as any);
export const POST: any = (req: Request) => auth(req as unknown as any);

export const runtime = 'nodejs';
