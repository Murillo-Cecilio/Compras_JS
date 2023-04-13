class Produto {
    //Atributos que será definido dentro do bloco.
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }
    //Funções, ações que o projeto vai realizar
    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            if (this.editId == null) {
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto)
            }

        }

        this.listaTabela();
        this.cancelar();//comando para apagar a caixa de produto e preços.
        this.caculoTotal();

    }
    
    caculoTotal() {

        let subTotal = 0
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            const precoTotal = this.arrayProdutos[i].preco
            if(!isNaN (precoTotal)){
                subTotal = subTotal+precoTotal
            }
        }
        document.getElementById('total').value = subTotal;

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
        imgEdit.setAttribute("onclick", "produto.editarTexto(" + JSON.stringify(this.arrayProdutos[i]) + ")");

        let imgDelete = document.createElement('img');
        imgDelete.src = 'img/delete.png';
        imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");//atribuindo a img o comando via js.

        //<td><img></td>
        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDelete);

        console.log(this.arrayProdutos)
    }
}

adicionar(produto) {
    produto.preco = parseFloat(produto.preco)
    this.arrayProdutos.push(produto);
    this.id++;
}

//comando para atualizar o cadastro, no lugar de adc um novo ID.
atualizar(id, produto) {
    for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
            this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
            produto.preco = parseFloat(produto.preco)
            this.arrayProdutos[i].preco = produto.preco;
            this.caculoTotal()
        }
    }
}

//comando para editar item selecionado em ações
editarTexto(dados) {
    this.editId = dados.id;

    document.getElementById('produto').value = dados.nomeProduto;
    document.getElementById('preco').value = dados.preco;

    document.getElementById('botao').innerText = 'Atualizar'
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

    document.getElementById('botao').innerText = 'Salvar';
    this.editId = null;
}

deletar(id) {
    if (confirm('Deseja realmente deletar o produto ID ' + id)) {
        let tbody = document.getElementById('tbody');

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);// comando para deletar tabela de forma dinâmica
                this.caculoTotal();
            }
        }
        console.log(this.arrayProdutos);
    }
}
}

var produto = new Produto();
