const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // finds all tags and includes its associated Product data
  const tagData = await Tag.findAll({
    include: [{ model: Product, ProductTag }]
  });
  res.json(tagData);
});

router.get('/:id', async (req, res) => {
  // finds a single tag by its `id` and includes its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product, ProductTag }]
  });
  res.json(tagData);
});

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body);
  res.json(tagData);
});

router.put('/:id', async (req, res) => {
  const updatedTag = await Tag.update({ tag_name: req.body.tag_name },
    {
      where: { id: req.params.id }
    });
  res.json(updatedTag);
});

router.delete('/:id', async (req, res) => {
  const deletedTag = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(deletedTag);
});

module.exports = router;
