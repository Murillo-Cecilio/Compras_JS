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

        this.listaTabela();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');

        for(let i = 0;i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;
            


        }
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
