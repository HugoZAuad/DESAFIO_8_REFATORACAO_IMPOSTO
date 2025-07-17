# Refatoração do Projeto de Cálculo de Preço Final com Impostos e Descontos

---

## Objetivo

Este projeto é uma API que calcula o preço final de um produto considerando país, estado, categoria do produto e um código de desconto opcional. A refatoração teve como foco aplicar os princípios de **SOLID** e **Clean Code**, além de utilizar padrões de projeto para melhorar a organização, manutenção e extensibilidade do código.

---

## Melhorias Realizadas

- Separação da lógica de cálculo em estratégias específicas para impostos e descontos (padrão Strategy).
- Uso de fábricas para criação das estratégias corretas (padrão Factory).
- Serviço dedicado para orquestrar o cálculo e geração do relatório.
- Validação de parâmetros isolada em middleware para maior clareza e reutilização.
- Código modularizado para facilitar manutenção e testes.
- Implementação de testes unitários e end-to-end para garantir qualidade e funcionamento.
- Remoção de logs diretos no console, adotando respostas estruturadas.
- Tratamento de erros aprimorado, com mensagens claras para o cliente.

---

## Funcionalidades

1. Recebe requisições **GET** na rota **/calculate** com os parâmetros necessários.
2. Parâmetros obrigatórios:
    - **country** (país)
    - **state** (estado)
    - **category** (categoria do produto)
    - **price** (preço do produto, numérico)
3. Parâmetro opcional:
    - **discountCode** (código de desconto válido)
4. Aplica regras de cálculo de impostos e descontos conforme as estratégias definidas.
5. Retorna um relatório detalhado em JSON com o cálculo final.

---

## Parâmetros da Rota **/calculate**

| Parâmetro        | Tipo   | Obrigatório | Descrição                                     |
|------------------|--------|-------------|-----------------------------------------------|
| **country**      | String | ✅           | País do cliente (ex.: USA, Canada).           |
| **state**        | String | ✅           | Estado do cliente (ex.: CA, TX).              |
| **category**     | String | ✅           | Categoria do produto (ex.: electronics).      |
| **price**        | Number | ✅           | Preço do produto em formato numérico.         |
| **discountCode** | String | ❌           | Código de desconto aplicável (ex.: SUMMER10). |

---

## Exemplo de Requisição

### URL

```plaintext
GET http://localhost:3000/calculate?country=USA&state=CA&category=electronics&price=100&discountCode=SUMMER10
```

### Resposta

```json
{
   "country": "USA",
   "state": "CA",
   "category": "electronics",
   "price": 100,
   "discountCode": "SUMMER10",
   "tax": 8.25,
   "discount": 10,
   "finalPrice": 98.25
}
```

---

## Códigos de desconto válidos

- **SUMMER10**: Aplica 10% de desconto.
- **WINTER15**: Aplica 15% de desconto.

---

## Como Executar o Projeto

```bash
npm install
npm start
```

A API estará disponível em `http://localhost:3000`.

---
