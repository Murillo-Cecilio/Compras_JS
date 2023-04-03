class Produto {
    //Atributos que será definido dentro do bloco.
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    //Funções, ações que o projeto vai realizar
    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        console.log(this.arrayProdutos);
    }
    
    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    //Função para ler os campos e devolver para o salvar.
    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    //Validar o campo produto para verificar se foi adc antes de salvar.
    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += 'Informe o nome do Produto \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {

    }
}

var produto = new Produto();
