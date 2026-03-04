const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    
    try{
        const recipes = await db.query('SELECT * FROM recipe;');
    console.log(recipes.rows);
    res.json(recipes.rows);
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: 'An error occurred while fetching the recipes.' });
    }
});

module.exports = router;