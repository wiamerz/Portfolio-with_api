const express = require('express');
const router = express.Router();
const Task = require('../Models/models');

// Créer un message
router.post('/', async (req, res) => {
  try {
    const { name, email, telephone, message } = req.body;
    const task = await Task.create({ name, email, telephone, message });
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Obtenir tout les messages
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});



// Supprimer un message
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, error: 'Tâche non trouvée' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;