class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData =  $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor =  $('#valor');
        this._tbody = $('.table tbody');

    }

    adiciona (event){
        event.preventDefault();
        

        let data = DateConverter.paraData(this._inputData.value);
       
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        console.log(DateConverter.paraTexto(negociacao.data));
        this.limpaFormulario();
    
    }

    limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
        this._inputData.focus();
    }
}