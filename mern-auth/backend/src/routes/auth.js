import express from 'express';
import login from '../services/auth/login.js';
import register from '../services/auth/register.js';
import credentials from '../services/auth/credentials.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  return await login(req, res);
});

router.post('/register', async (req, res) => {
  return await register(req, res);
});

router.post('/credentials', async (req, res) => {
  return await credentials(req, res);
});

export default router;
