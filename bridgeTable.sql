INSERT INTO ingredientinrecipe (recipeid, ingredient_id) 
VALUES (1, 1);

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b 
ON a.recipeName = 'Pumpkin Pasties' AND b.ingredientname = 'cloves';

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b 
ON a.recipeName = 'Pumpkin Pasties' AND b.ingredientname = 'Pastry dough';

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b 
ON a.recipeName = 'Pumpkin Pasties' AND b.ingredientname = 'Egg wash (1 egg beaten with a splash of milk)';

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b 
ON a.recipeName = 'Pumpkin Tartlets' AND b.ingredientname = 'pumpkin puree';

SELECT a.recipeName, b.ingredientName FROM recipe a
INNER JOIN IngredientInRecipe c
ON a.id = c.recipeId
INNER JOIN ingredient b
ON b.id = c.ingredientId;

INSERT INTO IngredientInRecipe (recipeId, ingredient_Id)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(2,1),
(2,8),
(2,9),
(2,3),
(2,4),
(2,10),
(2,11);

INSERT INTO IngredientInRecipe (recipeId, ingredient_Id)
SELECT r.id, i.id
FROM Recipe r
JOIN Ingredient i ON 1=1
WHERE r.recipeName IN ('Pumpkin Pasties', 'Pumpkin Tartlets')
AND i.ingredientName = 'cloves';

INSERT INTO IngredientInRecipe (recipeId, ingredient_Id)
VALUES
(3,1),
(3,12),
(3,13),
(3,14),
(3,15),
(3,16);