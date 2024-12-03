import express from "express";

const app = express();

function calculate(country, state, category, price, discountCode) {
    let tax = 0;
    let discount = 0;

    if (country === 'USA') {
        if (state === 'CA') {
            if (category === 'electronics') {
                tax = price * 0.0825;
            } else if (category === 'books') {
                tax = price * 0.07;
            } else {
                tax = price * 0.08;
            }
        } else if (state === 'TX') {
            if (category === 'electronics') {
                tax = price * 0.08;
            } else {
                tax = price * 0.06;
            }
        } else {
            tax = price * 0.05;
        }
    } else if (country === 'Canada') {
        if (category === 'electronics') {
            tax = price * 0.12;
        } else {
            tax = price * 0.1;
        }
    } else {
        tax = price * 0.15; // Taxa padrão para outros países
    }

    if (discountCode) {
        if (discountCode === 'SUMMER10') {
            discount = price * 0.1;
        } else if (discountCode === 'WINTER15') {
            discount = price * 0.15;
        } else {
            discount = 0;
        }
    }

    const finalPrice = price + tax - discount;

    // Relatório estruturado
    const report = {
        country,
        state,
        category,
        price,
        discountCode,
        tax: parseFloat(tax.toFixed(2)),
        discount: parseFloat(discount.toFixed(2)),
        finalPrice: parseFloat(finalPrice.toFixed(2)),
    };

    return report;
}


app.get('/calculate', (req, res) => {
    const { country, state, category, price, discountCode } = req.query;

    if (!country || !state || !category || isNaN(parseFloat(price))) {
        res.status(400).send('Parâmetros ausentes ou inválidos');
        return;
    }

    const report = calculate(country, state, category, parseFloat(price), discountCode);

    res.send(report);
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
