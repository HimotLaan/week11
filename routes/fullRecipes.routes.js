const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    const recipes = await db.query(`
            SELECT a.recipeName, a.instructions, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId;
        `);

        const recipesMap = {};

        for (const item of recipes.rows) {
            const { recipename, instructions, ingredientname } = item;

            if (!recipesMap[recipename]) {
                recipesMap[recipename] = {
                    recipename: recipename,
                    instructions: instructions,
                    ingredients: []
                };
            }

            recipesMap[recipename].ingredients.push(ingredientname);

        }
        
        const resultArray = Object.values(recipesMap);
        res.json(resultArray);

});

router.get('/recipeingredients', async (req, res) => {
    try {
        const recipes = await db.query(`
            SELECT a.recipeName, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId;
        `);

        const recipesMap = {};

        for (const item of recipes.rows) {
            const { recipename, ingredientname } = item;

            if (!recipesMap[recipename]) {
                recipesMap[recipename] = [];
            }

            
            if (!recipesMap[recipename].includes(ingredientname)) {
                recipesMap[recipename].push(ingredientname);
            }
        }
        const resultArray = Object.entries(recipesMap);
        res.json(resultArray);   

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/search', async (req, res) => {
    try { 
        const searchString = req.query.recipeName;
        console.log(searchString);

        const recipe = await db.query(`SELECT a.recipeName, a.instructions, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId WHERE a.recipeName = $1`, [searchString]);

        const recipesMap = {};

        for (const item of recipe.rows) {
            const { recipename, instructions, ingredientname } = item;
            if (!recipesMap[recipename]) {
                recipesMap[recipename] = {
                    recipename: recipename,
                    instructions: instructions,
                    ingredients: []
                };
            }
            recipesMap[recipename].ingredients.push(ingredientname);
        }     

    }

    
    catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: 'Server error' });
        }
});
module.exports = router;