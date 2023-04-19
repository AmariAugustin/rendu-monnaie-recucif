const monnaie = [100,50,20,10,5,2,1];

function renduMonnaie(somme,rendu,i){
    if (somme==0){
        return rendu;
    }
    else if (somme<monnaie[i]){
        return renduMonnaie(somme,rendu,(i+=1));
    }
    else{
        rendu.push(monnaie[i])
        return renduMonnaie(somme-monnaie[i],rendu,i);
    }
}

console.log(renduMonnaie(562,[],0));
