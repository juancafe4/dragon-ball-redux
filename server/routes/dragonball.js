const express = require('express');
const router = express.Router();

const DragonBall = require('../models/DragonBall');

router.route('/')
  .get((req, res) => {
    DragonBall.find({})
      .then(res.data)
      .catch(res.error)
  })
  .post((req, res) => {
    DragonBall.create(req.body)
      .then(res.data)
      .catch(res.error)
  })

router.route('/:id')
  .get((req, res) => {
    DragonBall.findOne(req.params.id)
      .then(res.data)
      .catch(res.error)
  })
  .delete((req, res) => {
    DragonBall.findByIdAndRemove(req.params.id)
      .then(() => res.send())
      .catch(res.error)
  })
  .put((req, res) => {
    DragonBall.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(res.data)
      .catch(res.error)
  })

module.exports = router;