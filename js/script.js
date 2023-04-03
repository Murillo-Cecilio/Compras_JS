class Produto {
    //Atributos que será definido dentro do bloco.
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    //Funções, ações que o projeto vai realizar
    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';//comando para não refazer a lista a cada add item.

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';

            //<td><img></td>
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

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

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do Produto \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }
}

var produto = new Produto();
