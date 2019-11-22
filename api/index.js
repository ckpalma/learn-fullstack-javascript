import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: [] });
});

router.get('/hi', (req, res) => {
  res.send({ data: ["hi"] });
});

export default router;