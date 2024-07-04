var vitorias =300;
let derrotas = 250;

let saldoDeRanqueadas =0;
let rank="";

function saldodepartidas(victorys ,  defeats){

    let saldo= victorys - defeats;

    return saldo;
}

function nivel(){

    if(  vitorias < 10) {
        rank ="Ferro";
        console.log(vitorias);
    }else if(vitorias>10 && vitorias<=20){
        rank ="Bronze";
    }else if(vitorias>20 && vitorias<=50){
        rank ="Prata";
    }else if(vitorias>50 && vitorias<=80){
        rank ="Ouro";
    }else if(vitorias>80 && vitorias<=90){
        rank ="Diamante";
    }else if(vitorias>90 && vitorias<=100){
       rank ="Lendário";
    }else{rank ="Imortal";}
 
       return rank;
}



console.log("O Herói tem de saldo de vitórias "+ saldodepartidas(vitorias, derrotas)+" e está no nível "+ nivel());