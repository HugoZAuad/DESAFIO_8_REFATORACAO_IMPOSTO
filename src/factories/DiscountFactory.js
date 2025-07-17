import { SummerDiscountRule, WinterDiscountRule, DefaultDiscountRule } from '../entities/DiscountRule.js';

class DiscountFactory {
    static create(discountCode) {
        const discountRuleMap = {
            'SUMMER10': new SummerDiscountRule(),
            'WINTER15': new WinterDiscountRule(),
        };

        return discountRuleMap[discountCode] || new DefaultDiscountRule();
    }
}

export { DiscountFactory };
