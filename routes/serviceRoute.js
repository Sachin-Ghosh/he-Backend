const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Get all services
router.get('/', serviceController.getAllServices);

router.get('/', serviceController.getServicesByCategory);

// Create a new service
router.post('/', serviceController.createService);

// Get a single service
router.get('/:id', serviceController.getServiceById);

// Update a service
router.put('/:id', serviceController.updateService);

// Delete a service
router.delete('/:id', serviceController.deleteService);

module.exports = router;
