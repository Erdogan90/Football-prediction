import clientPromise from '../../../../lib/mongodb';
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const userId = session.user.email;

  if (req.method === 'POST') {
    const { matchId, prediction } = req.body;
    const result = await db.collection('predictions').insertOne({ userId, matchId, prediction });
    res.status(201).json(result);
  } else if (req.method === 'GET') {
    const predictions = await db.collection('predictions').find({ userId }).toArray();
    res.status(200).json(predictions);
  } else {
    res.status(405).end();
  }
}
