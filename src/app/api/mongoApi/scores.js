
import clientPromise from '../../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'GET') {
    const scores = await db.collection('scores').find({}).toArray();
    res.status(200).json(scores);
  } else {
    res.status(405).end();
  }
}
