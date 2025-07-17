class TaxRule {
    isValidState(state) {
        throw new Error('Method not implemented');
    }

    isValidCategory(state, category) {
        throw new Error('Method not implemented');
    }

    calculate(state, category, price) {
        throw new Error('Method not implemented');
    }
}

class USATaxRule extends TaxRule {
    constructor() {
        super();
        this.validStates = ['CA', 'TX', 'Other'];
        this.validCategories = ['electronics', 'books', 'other'];
    }

    isValidState(state) {
        return this.validStates.includes(state);
    }

    isValidCategory(state, category) {
        return this.validCategories.includes(category);
    }

    calculate(state, category, price) {
        let taxRate = 0.05; // default tax rate

        if (state === 'CA') {
            if (category === 'electronics') {
                taxRate = 0.0825;
            } else if (category === 'books') {
                taxRate = 0.07;
            } else {
                taxRate = 0.08;
            }
        } else if (state === 'TX') {
            if (category === 'electronics') {
                taxRate = 0.08;
            } else {
                taxRate = 0.06;
            }
        }

        return price * taxRate;
    }
}

class CanadaTaxRule extends TaxRule {
    constructor() {
        super();
        this.validCategories = ['electronics', 'other'];
    }

    isValidState(state) {
        // No state validation for Canada in current rules
        return true;
    }

    isValidCategory(state, category) {
        return this.validCategories.includes(category);
    }

    calculate(state, category, price) {
        let taxRate = 0.1; // default tax rate

        if (category === 'electronics') {
            taxRate = 0.12;
        }

        return price * taxRate;
    }
}

class DefaultTaxRule extends TaxRule {
    isValidState(state) {
        return true;
    }

    isValidCategory(state, category) {
        return true;
    }

    calculate(state, category, price) {
        return price * 0.15;
    }
}

export { TaxRule, USATaxRule, CanadaTaxRule, DefaultTaxRule };
