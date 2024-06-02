// api/proxy.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=google&apiKey=fd0dde08e8cd4c6ca34c5e0e11348afe', {
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY}` // Replace with your actual API key header if needed
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
