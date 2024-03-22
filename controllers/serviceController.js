const Service = require('../models/serviceModel');

// Controller functions for service management

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get services by category
exports.getServicesByCategory = async (req, res) => {
    const category = req.query.category;

    try {
        const services = await Service.find({ category: category });
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new service
exports.createService = async (req, res) => {
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price
    });

    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a single service
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(service);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a service
exports.updateService = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(updatedService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a service
exports.deleteService = async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
