import { USATaxRule, CanadaTaxRule, DefaultTaxRule } from '../entities/TaxRule.js';

class TaxFactory {
    static create(country) {
        const taxRuleMap = {
            'USA': new USATaxRule(),
            'Canada': new CanadaTaxRule(),
        };

        return taxRuleMap[country] || new DefaultTaxRule();
    }
}

export { TaxFactory };
