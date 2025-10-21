const alunos = ["Ivande","Kauyves","David","Andreza"];

//alunos[4] = "John"; // É possível,mas não é indicado

alunos.push("John"); // Adiciona um elemento ao final do array
console.log(alunos);

let removido = alunos.pop(); // Remove o último elemento,retornando-o
console.log(alunos);
console.log("Item removido: ", removido);

alunos.unshift("Lucas"); // Adiciona ao início
console.log(alunos);

removido = alunos.shift(); // Remove o primeiro elemento,retornando-o
console.log(alunos);
console.log("Item removido:", removido);

delete alunos[1]; // Remove um elemento,preservando os índices dos demais
console.log(alunos);

const copiaAlunos = alunos;
copiaAlunos.push("Ana");
console.log(copiaAlunos);
console.log(alunos);