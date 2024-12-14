async function chamarCep() {
    const cep = document.getElementById('cep').value;

    if (cep.length == 8) {
        let url = `https://viacep.com.br/ws/${cep}/json/`
        const promise = await fetch(url);
        const dados = await promise.json()
        console.log(dados)

        const uf = document.getElementById('uf');
        const localidade = document.getElementById('localidade');
        const logradouro = document.getElementById('logradouro');
    
        uf.value = dados.uf;
        localidade.value = dados.localidade;
        logradouro.value = dados.logradouro;

        numero.focus()
    }

    else{
        console.log('formato incorreto')
    }
}