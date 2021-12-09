let permissao; // usuarios: comum, cordenador, gerente e diretor
permissao = 'gerente';

switch (permissao) {
    case 'comum':
        console.log('Bem vindo ao seu Novo Cargo!');
        break;

    case 'cordenador':
        console.log('Bem vindo ao seu Novo Cargo de Cordenador !');
        break;

    case 'gerente':
        console.log('Bem vindo ao seu Novo Cargo de Gerente !');
        break;

    case 'diretor':
        console.log('Bem vindo ao seu Novo Cargo de diretor !');
        break;
}