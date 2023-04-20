
function enviardados(){
    if(document.dados.nome.value=="" || document.dados.nome.value.length < 8){
        alert( "Preencha campo NOME corretamente!" );
        document.dados.nome.focus();
        return false;
    }
    if( document.dados.email.value=="" || document.dados.email.value.indexOf('@')==-1 ||
        document.dados.email.value.indexOf('.')==-1 ){
        alert( "Preencha campo E-MAIL corretamente!" );
        document.dados.email.focus();
        return false;
    }
    
    if ((document.dados.Produto.value == "")||( document.dados.TipoProduto.value=="")) {
       alert("Por favor, certifique-se de que todos os campos sejam preenchidos corretamente");
       return false;
    }
 
    if ((document.dados.Produto.value == 'p1')&&( document.dados.TipoProduto.value== 't2')|| (document.dados.Produto.value == 'p2')&&( document.dados.TipoProduto.value== 't1' )) {
        alert("Produto ou Tipo não condizem!");
        return false;
     }
    if (document.dados.comentario.value==""){
        alert( "Preencha o campo de comentário!" );
        document.dados.mensagem.focus();
        return false;
    }

    if (document.dados.comentario.value.length < 10 ){
        alert( "Necessário pelo menos 10 caractéres!" );
        document.dados.comentario.focus();
        return false;
    }
return true;
}