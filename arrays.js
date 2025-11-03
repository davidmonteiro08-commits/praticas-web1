// Map

const produtos = [
  {
    id: 1,
    nome: "Notebook Dell Inspiron 15",
    categoria: "Informática",
    preco: 3899.90,
    estoque: 12,
    descricao: "Notebook com processador Intel i5, 8GB RAM e SSD de 512GB."
  },

  {
    id: 2,
    nome: "Smartphone Samsung Galaxy S23",
    categoria: "Celulares",
    preco: 4999.00,
    estoque: 8,
    descricao: "Smartphone com câmera tripla e tela AMOLED de 6.1 polegadas."
  },

  {
    id: 3,
    nome: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    categoria: "Áudio",
    preco: 249.90,
    estoque: 25,
    descricao: "Fone leve, dobrável e com bateria de até 40 horas."
  },

  {
    id: 4,
    nome: "Monitor LG Ultragear 27''",
    categoria: "Periféricos",
    preco: 1599.00,
    estoque: 6,
    descricao: "Monitor gamer 144Hz com tecnologia IPS e resolução Full HD."
  },

  {
    id: 5,
    nome: "Teclado Mecânico Redragon Kumara",
    categoria: "Periféricos",
    preco: 289.90,
    estoque: 15,
    descricao: "Teclado mecânico com switches Outemu Blue e iluminação RGB."
  }
];

const aplicarDesconto = (produto) => {
    // spread operator - espalhar os atributos do objeto
    // cópia do array original
    const newProduto = {...produto};
    newProduto.preco = newProduto.preco * 0.9;
    return newProduto;
}

const produtosComDesconto = produtos.map(aplicarDesconto);
//console.table(produtos)
//console.table(produtosComDesconto);

// Filter

const filtrarPorEstoque = (produto) => {
    return produto.estoque < 10;
}

const estoqueBaixo = produtos.filter(filtrarPorEstoque);
//console.table(estoqueBaixo);

// Reduce

const valorTotal = produtos.reduce((acc, produto) => acc + produto.preco, 0);
//console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`)

//Composição de funções
const valor = produtos.filter(produto => produto.estoque < 10)
.map(aplicarDesconto)
.reduce((acc, produto) => acc + produto.preco, 0);

console.log(`Valor total dos produtos com menos de 10 unidades no estoque com desconto de 10%: ${valor.toFixed(2)}`);

const valor2 = produtos.filter(produto => produto.estoque < 10)
.map(aplicarDesconto)
.reduce((acc, produto) => acc * produto.estoque, 1);

console.log(valor2);