class TaxStrategy {
    calculate(price) {
        throw new Error('Method not implemented');
    }
}

class USATaxStrategy extends TaxStrategy {
    constructor(state, category) {
        super();
        this.state = state;
        this.category = category;
    }

    calculate(price) {
        let taxRate = 0.05; // default tax rate

        if (this.state === 'CA') {
            if (this.category === 'electronics') {
                taxRate = 0.0825;
            } else if (this.category === 'books') {
                taxRate = 0.07;
            } else {
                taxRate = 0.08;
            }
        } else if (this.state === 'TX') {
            if (this.category === 'electronics') {
                taxRate = 0.08;
            } else {
                taxRate = 0.06;
            }
        }

        return price * taxRate;
    }
}

class CanadaTaxStrategy extends TaxStrategy {
    constructor(category) {
        super();
        this.category = category;
    }

    calculate(price) {
        let taxRate = 0.1; // default tax rate

        if (this.category === 'electronics') {
            taxRate = 0.12;
        }

        return price * taxRate;
    }
}

class DefaultTaxStrategy extends TaxStrategy {
    calculate(price) {
        return price * 0.15;
    }
}

class TaxStrategyFactory {
    static create(country, state, category) {
        if (country === 'USA') {
            return new USATaxStrategy(state, category);
        } else if (country === 'Canada') {
            return new CanadaTaxStrategy(category);
        } else {
            return new DefaultTaxStrategy();
        }
    }
}

export { TaxStrategyFactory };
