import { TaxStrategyFactory } from './taxStrategies.js';
import { DiscountStrategyFactory } from './discountStrategies.js';

class CalculationService {
    calculate(country, state, category, price, discountCode) {
        const taxStrategy = TaxStrategyFactory.create(country, state, category);
        const discountStrategy = DiscountStrategyFactory.create(discountCode);

        const tax = taxStrategy.calculate(price);
        const discount = discountStrategy.calculate(price);
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

export { CalculationService };
