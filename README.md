# Calcular Preço Final com Impostos e Descontos (versão inicial)

---

## Objetivo

Este projeto é uma API simples que calcula o preço final de um produto com base no país, estado, categoria do produto e
um código de desconto opcional. A API retorna o preço final, aplicando regras rígidas de impostos e descontos, mas o
código está escrito de forma desorganizada para ilustrar más práticas de desenvolvimento.

---

## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/calculate**.
2. ✅ Os parâmetros obrigatórios são:
    - **country** (país)
    - **state** (estado)
    - **category** (categoria do produto).
    - **price** (preço do produto, como número).
3. ✅ Opcionalmente, pode receber:
    - **discountCode** (código de desconto aplicável).
4. ✅ Calcula os impostos com base no país, estado e categoria do produto.
5. ✅ Aplica descontos, se o código for válido.
6. ✅ Gera um relatório no console com os detalhes da operação.
7. ✅ Retorna um JSON contendo o preço final calculado.

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
- SUMMER10: Aplica 10% de desconto.
- WINTER15: Aplica 15% de desconto.

---

##  Erros comuns

- Parâmetro ausente: Certifique-se de que todos os parâmetros obrigatórios estejam na URL.

- Preço inválido: O preço deve ser um número maior que zero.

---

## Exceções

### Erro 400

Ocorre quando qualquer um dos seguintes parâmetros obrigatórios está ausente ou inválido:

- country: País do cliente (ex.: USA, Canada).
- state: Estado do cliente (ex.: CA, TX).
- category: Categoria do produto (ex.: electronics, books).
- price: Preço do produto (deve ser numérico e maior que zero).

```json
{
  "error": "Parâmetros ausentes ou inválidos"
}
```

### Erro 500

Retorna quando ocorre qualquer outro problema inesperado no servidor, como falha de lógica ou exceções não tratadas.

```json
{
  "error": "Erro inesperado no servidor"
}
```

---

## Problemas identificados no código atual:

- Função monolítica (calculate): Combina lógica de cálculo de impostos, descontos e geração de relatórios, violando o princípio de responsabilidade única.
- Validação de parâmetros na rota: O processo de validação está misturado à lógica da rota.
- Console.log no servidor: A geração do relatório direto no console não é prática em ambientes de produção.
- Sem estrutura modular: A lógica poderia ser separada em funções ou arquivos para facilitar manutenção e testes.
- Tratamento de erros: O tratamento de erros é limitado.

---

# Como executar o projeto

```bash
npm install
```

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.
