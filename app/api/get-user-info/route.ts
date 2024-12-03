import { NextApiRequest, NextApiResponse } from 'next';
import { verifySession, verifySessionNew } from '../../lib/dal';
import { connection } from 'next/server';

export async function GET(
  req: NextApiRequest, 
  res: NextApiResponse
) {
    try {
        let data = {
            role:"Admin",
            conf:"league 1",
            teams:[
                "team1", "team2", "team3", "team4", "team5", "team6",
            ]
        }
        return new Response(JSON.stringify(data), {status:201})
    } catch (error) {
        return new Response("Failed to fetch user info",{status:500})
    }
}
