//Por: José Carrillo. Proyecto #1 de Lenguajes de Clientes Web

class Ope{

MatrizCheck(MatrizA, MatrizB){

let dif = 0;

  if (MatrizA.length==MatrizB.length){

    for (let i = 0; i<MatrizA.length; i++){

      if (MatrizA[i].length!=MatrizB[i].length)
      dif++;

    }

    if (dif!=0) return false;
else return true;
  }else return false;

}
  
Dimensiones(){
  console.log ("Las matrices son de dimensiones distintas.");
}

Suma (MatrizA, MatrizB){
    
if (MatrizCheck(MatrizA, MatrizB) == true){

  for (let i = 0; i<MatrizA.length; i++){
    for (let j = 0; j<MatrizA[i].length; j++){
    
       MatrizC[i][j] = (MatrizA[i][j] + MatrizB[i][j]);        
    }
   console.log (MatrizC[i]);
    }
}
else Dimensiones();
}

Resta (MatrizA, MatrizB){
    
  if (MatrizCheck(MatrizA, MatrizB) == true){
  
    for (let i = 0; i<MatrizA.length; i++){
      for (let j = 0; j<MatrizA[i].length; j++){
      
         MatrizC[i][j] = (MatrizA[i][j] - MatrizB[i][j]);        
      }
     console.log (MatrizC[i]);
      }
  }
  else Dimensiones();
  }

  Prod (MatrizA, MatrizB){
   
    
    if (MatrizCheck(MatrizA, MatrizB) == true){
    
      let dif = 0;
      for (let i = 0; i<MatrizA.length; i++){
  
        if (MatrizA[i].length!=MatrizA.length)

    dif++;
      }
      if (dif!=0){

        console.log("Las matrices no son cuadradas.");
      }else{
/*
        for (let i = 0; i < MatrizA.length; i++) {
          for (let j = 0; j < MatrizA[i].length; j++) {
              MatrizC[i][j] = 0;
          }
      }
  
      for (let i = 0; i < MatrizA.length; i++) {
          for (let j = 0; j < MatrizA[i].length; j++) {
              for (let k = 0; k < MatrizA[j].length; k++) {
                  MatrizC[i][j] = MatrizA[i][k] * MatrizB[k][j];
              }
          }
      }

      console.log (MatrizC);
    }*/

    for (let i = 0; i<MatrizA.length; i++){
      for (let j = 0; j<MatrizA[i].length; j++){
      
         MatrizC[i][j] = (MatrizA[i][j] * MatrizB[i][j]);        
      }
     console.log (MatrizC[i]);
      }
  }
  }  else Dimensiones();
}
   

getTranspuesta(Matriz){

  let dif = 0;
      for (let i = 0; i<Matriz.length; i++){
  
        if (Matriz[i].length!=Matriz.length)

    dif++;
      }
      if (dif!=0){

        console.log("La matriz no es cuadrada.");
      }else{

   for (let i = 0; i<Matriz.length; i++){
            for (let j = 0; j<i; j++){
              let extra = Matriz[i][j];
              Matriz[i][j] = Matriz[j][i];
             Matriz[j][i] = extra;
            }
      }
      for (let i = 0; i<Matriz.length; i++){
      console.log (Matriz[i]);
      }
}
}

getInversa(matrix){

  //Para Matriz de 2x2

  let dif = 0;
      for (let i = 0; i<Matriz.length; i++){
  
        if (Matriz[i].length!=Matriz.length || Matriz.length != 2 || Matriz[i].length != 2)
    dif++;
      }
      if (dif!=0){

        console.log("La matriz no es valida para 2x2.");
      }else{

    let extra = Matriz[0][0];
    Matriz[0][0] = Matriz[1][1];
    Matriz[1][1] = extra;

    Matriz[0][1] *= -1;
    Matriz[1][0] *= -1;

    let determinante = (Matriz[0][0] * Matriz[1][1]) - (Matriz[0][1] * Matriz[1][0]);

    Matriz[0][0] *= (1/determinante);
    Matriz[0][1] *= (1/determinante);
    Matriz[1][0] *= (1/determinante);
    Matriz[1][1] *= (1/determinante);

    for (let i = 0; i<Matriz.length; i++){
      console.log (Matriz[i]);
      }

}
 
 /* //Para Matriz de 3x3
 
// Function to print matrix
function printMatrix(Matriz) {
  for (let i = 0; i < Matriz.length; i++) {
    console.log(Matriz[i].join(" "));
  }
  }
  
  // Function to print inverse matrix
  function printInverse(Matriz) {
  for (let i = 0; i < Matriz.length; i++) {
    for (let j = Matriz.length; j < 2 * Matriz.length; j++) {
    console.log(Matriz[i][j].toFixed(3) + " ");
    }
    console.log("\n");
  }
  }
  
  // Function to find inverse of matrix
  function inverseOfMatrix(Matriz) {
  let order = Matriz.length;
  let temp;
  
  
  console.log("=== Matrix ===");
  printMatrix(Matriz);
  
  for (let i = 0; i < order; i++) {
    for (let j = 0; j < 2 * order; j++) {
    if (j == i + order) {
      Matriz[i][j] = 1;
    }
    }
  }
  
  for (let i = order - 1; i > 0; i--) {
    if (Matriz[i - 1][0] < Matriz[i][0]) {
    let tempArr = Matriz[i];
    Matriz[i] = Matriz[i - 1];
    Matriz[i - 1] = tempArr;
    }
  }
  
  console.log("\n=== Augmented Matrix ===");
  printMatrix(Matriz);
  
  for (let i = 0; i < order; i++) {
    for (let j = 0; j < order; j++) {
    if (j != i) {
      temp = Matriz[j][i] / Matriz[i][i];
      for (let k = 0; k < 2 * order; k++) {
        Matriz[j][k] -= Matriz[i][k] * temp;
      }
    }
    }
  }
  
  for (let i = 0; i < order; i++) {
    temp = Matriz[i][i];
    for (let j = 0; j < 2 * order; j++) {
      Matriz[i][j] = Matriz[i][j] / temp;
    }
  }
  
  console.log("\n=== Inverse Matrix ===");
  printInverse(Matriz);
  }

  inverseofMatrix(Matriz);*/
}

getIntegral(a, b, f){ // Metodo de Simpson 1/3

    const n = 6;
    sum = 0;

    h=(b-a)/n;
  for(i=1;i<n;i++){
    x=a+i*h;
    if(i%2==0){
      sum=sum+2*f(x);
    }
    else{
      sum=sum+4*f(x);
    }
  }
  integral=(h/3)*(f(a)+f(b)+sum);

  return integral;

}

getRoots(a, b){ // Metodo de Bisección

  let Error = 0.01;

  if (func(a) * func(b) >= 0){
            
            console.log("Los valores introducidos son incorrectos.");
        }else{

    let c = a;
        while ((b-a) >= Error){

            // Hallar punto medio
            Xr = (a+b)/2;
   
            // Se checkea la raiz
            if (func(Xr) == 0.0)
                break;
   
            // Se repiten los pasos
            else if (func(Xr)*func(a) < 0)
                b = Xr;
            else
                a = Xr;
        }

        console.log(Xr);
}
}

}

//module.exports = Ope;

const ope = new Ope();


Upper = 12;
    Lower = 0;
    function f(x){
     
       return (x*x); // x^2
    
    }
    
    console.log (getIntegral(Lower, Upper, f));
