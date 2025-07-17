import { TaxFactory } from '../factories/TaxFactory.js';
import { DiscountFactory } from '../factories/DiscountFactory.js';

class CalculateService {
    calculate(country, state, category, price, discountCode) {
        const taxRule = TaxFactory.create(country);
        const discountRule = DiscountFactory.create(discountCode);

        if (!taxRule.isValidState(state)) {
            throw new Error(`Estado inválido para o país ${country}: ${state}`);
        }

        if (!taxRule.isValidCategory(state, category)) {
            throw new Error(`Categoria inválida para o país ${country} e estado ${state}: ${category}`);
        }

        if (!discountRule.isValidCode(discountCode)) {
            throw new Error(`Código de desconto inválido: ${discountCode}`);
        }

        const tax = taxRule.calculate(state, category, price);
        const discount = discountRule.calculate(price);
        const finalPrice = price + tax - discount;

        return {
            country,
            state,
            category,
            price,
            discountCode,
            tax: parseFloat(tax.toFixed(2)),
            discount: parseFloat(discount.toFixed(2)),
            finalPrice: parseFloat(finalPrice.toFixed(2)),
        };
    }
}

export { CalculateService };
