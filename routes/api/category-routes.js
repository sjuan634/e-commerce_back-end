const router = require('express').Router();
const e = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories and their associated products
  try{
    const categories = await Category.findAll({
      include: [{
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value include its associated products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }]
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id!'});
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);

    if(!category) {
      res.status(404).json({ message: 'No category found with this id!'});
      return;
    } else {
      await Category.update(req.body, {
        where: {
          id: req.params.id
        }
      });

      const updatedCategory = await Category.findByPk(req.params.id);
      res.status(200).json(updatedCategory);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json({ message: 'No category found with this id!'});
      return;
    } else {
      await Category.destroy({
        where: {
          id: req.params.id
        }
      });

      res.status(200).json(category);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
