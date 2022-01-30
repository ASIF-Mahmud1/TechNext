import express from 'express';
import pool from '../db.js';


const router = express.Router();


/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json({users : users.rows});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.post('/', async (req, res) => {
    try {
    
      const newUser = await pool.query(
        'INSERT INTO users (firstName, lastName, email) VALUES ($1,$2,$3) RETURNING *'
        , [req.body.firstName, req.body.lastName, req.body.email]);
     
      res.json(newUser.rows[0]);

    } catch (error) {
      res.status(500).json({error: error.message});
    }
  });

export default router;