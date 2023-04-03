class Produto {
    //Atributos que será definido dentro do bloco.
    constructor() {
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }
    //Funções, ações que o projeto vai realizar
    salvar() {
        alert('Vamos adicionar um produto');
    }

    cancelar() {
        alert('Este item será deletado')
    }
}

var produto = new Produto();
