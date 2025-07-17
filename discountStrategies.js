class DiscountStrategy {
    calculate(price) {
        return 0;
    }
}

class Summer10DiscountStrategy extends DiscountStrategy {
    calculate(price) {
        return price * 0.1;
    }
}

class Winter15DiscountStrategy extends DiscountStrategy {
    calculate(price) {
        return price * 0.15;
    }
}

class NoDiscountStrategy extends DiscountStrategy {
    calculate(price) {
        return 0;
    }
}

class DiscountStrategyFactory {
    static create(discountCode) {
        if (discountCode === 'SUMMER10') {
            return new Summer10DiscountStrategy();
        } else if (discountCode === 'WINTER15') {
            return new Winter15DiscountStrategy();
        } else {
            return new NoDiscountStrategy();
        }
    }
}

export { DiscountStrategyFactory };
