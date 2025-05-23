function Ninja(nome){
    this.nome = nome;
    this.atirarShuriken = function(){
        console.log("O ninja atirou a Shuriken");
    }
}

let naruto = new Ninja('Naruto');

console.log(naruto);

naruto.atirarShuriken();