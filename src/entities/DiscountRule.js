class DiscountRule {
    isValidCode(code) {
        throw new Error('Method not implemented');
    }

    calculate(price) {
        throw new Error('Method not implemented');
    }
}

class SummerDiscountRule extends DiscountRule {
    constructor() {
        super();
        this.code = 'SUMMER10';
    }

    isValidCode(code) {
        return code === this.code;
    }

    calculate(price) {
        return price * 0.1;
    }
}

class WinterDiscountRule extends DiscountRule {
    constructor() {
        super();
        this.code = 'WINTER15';
    }

    isValidCode(code) {
        return code === this.code;
    }

    calculate(price) {
        return price * 0.15;
    }
}

class DefaultDiscountRule extends DiscountRule {
    isValidCode(code) {
        return true;
    }

    calculate(price) {
        return 0;
    }
}

export { DiscountRule, SummerDiscountRule, WinterDiscountRule, DefaultDiscountRule };
