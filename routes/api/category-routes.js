const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // finds all categories be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [{ model: Product }]
  });
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // finds one category by its `id` value includes its associated Products
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }]
  });
  res.json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await models.Location.create(req.body);
  res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // updates a categpry by its `id`
  const updatedCategory = await Category.update({ category_name: req.body.category_name },
    {
      where: { id: req.params.id }
    });
  res.json(updatedCategory);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(deletedCategory);
});

module.exports = router;
