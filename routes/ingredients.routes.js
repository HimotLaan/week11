const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ingredients = await db.query('SELECT * FROM ingredient;');
        console.log(ingredients.rows);
        res.json(ingredients.rows);
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ errorMessage: 'An error occurred while fetching the ingredients.' });
    }
});

module.exports = router;