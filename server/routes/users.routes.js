import express from 'express';
import pool from '../db.js';
import format  from 'pg-format'


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

router.get('/:pageNumber', async (req, res) => {
  try {
    const {pageNumber }= req.params
    const pageSize= 2

    const totalUsers= await pool.query('SELECT COUNT(*) FROM users');
    const users = await pool.query(`SELECT * FROM users Order By userId LIMIT ${pageSize} OFFSET  ${((pageNumber-1) * pageSize)}`);
    res.json({users : users.rows, showNextButton: totalUsers.rows[0].count> pageSize*pageNumber});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.get('/:pageNumber', async (req, res) => {
  try {
    const {pageNumber }= req.params
    const pageSize= 2

    const totalUsers= await pool.query('SELECT COUNT(*) FROM users');
    const users = await pool.query(`SELECT * FROM users Order By userId LIMIT ${pageSize} OFFSET  ${((pageNumber-1) * pageSize)}`);
    res.json({users : users.rows, showNextButton: totalUsers.rows[0].count> pageSize*pageNumber});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.post('/search', async (req, res) => {
  try {
    const query= Object.keys(req.body)[0]
    const users = await pool.query(`SELECT * FROM users  WHERE LOWER (${query}) = $1`,[req.body[query].toLowerCase()]);
    res.json(users.rows);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.post('/', async (req, res) => {
    try {
       const {firstName,lastName,email}=req.body
       const newUser = await pool.query(
        'INSERT INTO users (firstName, lastName, email) VALUES ($1,$2,$3) RETURNING *'
        , [firstName, lastName, email]);
     
      res.json(newUser.rows[0]);

    } catch (error) {
      res.status(500).json({error: error.message});
    }
  });

router.post('/multi-insert', async (req, res) => { 
    try {
      
      const { users } = req.body
      const result = users.map((item) => {
        return [item.firstName, item.lastName, item.email]
      })
      const sql = format('INSERT INTO users (firstName, lastName,email) VALUES %L', result)
      const newUser = await pool.query(sql)
      res.json(newUser)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

export default router;