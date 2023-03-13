function repetir(elemento,numerorepeticao)
{
  let array=[]
  
for( let i = 0 ; i<numerorepeticao ; i++){
    array.push(elemento);
}
console.log(array);

}
function simboloMais(numeroRepeticao){
    let simbolo = "+";
    for (let i = 0; i < (numeroRepeticao - 1); i++){ //(numeroRepeticao - 1) --> pois ja comeca com um "+" na variavel}
     simbolo+= "+";      
}
return console.log(simbolo);
}
function receberPrimeiroEultimoElemento(elementos){
   const primeiroElemento= elementos.shift()
   const ultimoElemento = elementos.pop()

   return [ primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEultimoElemento([4,5,6,7]))



