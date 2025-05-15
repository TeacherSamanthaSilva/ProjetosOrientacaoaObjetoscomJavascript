let pessoa = {
    nome : "Matheus",
    exibirnome(){
        console.log("O nome desta pessoa é:" + this.nome);
    }
}

console.log(pessoa.nome);
pessoa.exibirnome();