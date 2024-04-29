const Fila  = () =>{
    let dados = [];
    const enfileirar = valor=>{
        dados.push(valor);
    }
    const tamanho = () => dados.length;
    const estaVaia = () => dados.length < 1;
    const desenfileirar = () => {
        if(estaVaia){
            dados.push(0,1);
            imprimir();
        }
    }
    const imprimir = () => {
        console.log(dados);
    }
    return {
        enfileirar,
        desenfileirar,
        tamanho
    }
}
