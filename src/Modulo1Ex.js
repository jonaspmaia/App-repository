/* Exercicio 1
class Usuario {
  constructor(email, senha) {
      this.email = email;
      this.senha = senha;
  }
  isAdmin() {
      return this.admin === true;
  }

}
class Admin extends Usuario {
  constructor() {
      super();
      this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

//exercicio 2

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuarios => usuarios.idade);
console.log(idades);

const usuario = usuarios.filter(usuarios => usuarios.idade >= 18 && usuarios.empresa === 'Rocketseat');
console.log(usuario);

const google = usuarios.find(usuarios => usuarios.empresa === 'Google');
console.log(google);

const multiplicacao = usuarios.map(usuarios => ({ ...usuarios, idade: usuarios.idade * 2 })).filter(usuarios => usuarios.idade <= 50);
console.log(multiplicacao);

//Exercico 3

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);


const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
mostraUsuario(nome, idade);
mostraUsuario(nome);

const promise = () => new Promise(resolve, reject => resolve());


//Exercicio 4
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


function mostraInfo({nome , idade}) {
  return `${nome} tem ${idade} anos.`;
 }
 mostraInfo({ nome: 'Diego', idade: 23 })

//Exercicio 5
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };

//Exercicio 6
const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);

//Exercicio 7
const nome = 'Diego';
const idade = 23;
const usuario = {
  nome,
  idade,
  cidade: 'Rio do Sul',
};
*/