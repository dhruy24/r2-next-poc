import { NextApiRequest, NextApiResponse } from 'next';
import { verifySession, verifySessionNew } from '../../lib/dal';
import { connection } from 'next/server';

export async function GET(
  req: NextApiRequest, 
  res: NextApiResponse
) {
    try {
        const session = await verifySession();
        console.log("sesss in routes", session)

        if (!session) {
            return new Response("Not authenticated", {status:201})
        }
        return new Response(JSON.stringify({ name: session.session }), {status:201})
    } catch (error) {
        console.error('Error verifying session:', error);
        return new Response("Failed to fetch",{status:500})
    }
}
