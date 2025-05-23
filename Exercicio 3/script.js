function Ninja(nome,qtd){
    this.nome = nome;
    this.estoqueShuriken = qtd;
    this.atirarShuriken = function(inimigo){
        if(this.estoqueShuriken > 0 ){
            console.log("O ninja atirou a shuriken");
            this.estoqueShuriken -=1;
            Object.vivo = false;
        }else{

            console.log("O ninja não pode mais atirar Shurikens");

        }
        
    }
}

function inimigo(){
    this.nome = this.nome;
    this.vivo = true;
}

let orochimaru = new inimigo('Orochimaru');

let naruto = new Ninja('Naruto',3);

console.log(naruto);

console.log(orochimaru);

naruto.atirarShuriken(orochimaru);