// helpers
function compareObjects(obj1,obj2){
// instanceof - objeto, Classe
if(obj1 instanceof obj2){
    console.log("o objeto" + obj1.nome + "é uma instância de obj2");
}else{
    console.log("o objeto" + obj1.nome + " não é uma instância de obj2");
}
}


// objects
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

compareObjects(naruto, Ninja);