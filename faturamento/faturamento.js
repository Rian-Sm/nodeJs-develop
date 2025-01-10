const faturamento = require('./faturamento.json'); // Supondo que os dados estejam em um arquivo JSON chamado 'faturamento.json'

const valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);

const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);
const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
