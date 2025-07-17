import { TaxFactory } from '../factories/TaxFactory.js';
import { DiscountFactory } from '../factories/DiscountFactory.js';

function validateParams(req, res, next) {
    const { country, state, category, price, discountCode } = req.query;

    if (!country || !state || !category || !price) {
        return res.status(400).send('Parâmetros ausentes');
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
        return res.status(400).send('Preço inválido');
    }

    const taxRule = TaxFactory.create(country);
    if (!taxRule.isValidState(state)) {
        return res.status(400).send(`Estado inválido para o país ${country}: ${state}`);
    }

    if (!taxRule.isValidCategory(state, category)) {
        return res.status(400).send(`Categoria inválida para o país ${country} e estado ${state}: ${category}`);
    }

    if (discountCode) {
        const discountRule = DiscountFactory.create(discountCode);
        if (!discountRule.isValidCode(discountCode)) {
            return res.status(400).send(`Código de desconto inválido: ${discountCode}`);
        }
    }

    next();
}

export { validateParams };
