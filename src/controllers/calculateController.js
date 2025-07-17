import express from 'express';
import { CalculateService } from '../services/CalculateService.js';
import { validateParams } from '../middlewares/validateParams.js';

const router = express.Router();
const calculateService = new CalculateService();

router.get('/calculate', validateParams, (req, res) => {
    const { country, state, category, price, discountCode } = req.query;

    try {
        const report = calculateService.calculate(country, state, category, parseFloat(price), discountCode);
        res.json(report);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export { router as calculateController };
