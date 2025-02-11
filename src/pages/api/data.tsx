export default function handler(req, res) {
    const { param } = req.query;
    res.status(200).json({ message: `You sent: ${param}`, timestamp: Date.now() });
  }