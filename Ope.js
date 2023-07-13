//Por: José Carrillo. Proyecto #1 de Lenguajes de Clientes Web - Ope.js

class Ope{

Suma (MatrizA, MatrizB){

let dif = 0;

  if (MatrizA.length==MatrizB.length){

    for (let i = 0; i<MatrizA.length; i++){

      if (MatrizA[i].length!=MatrizB[i].length)
      dif++;

    }

    if (dif==0){

      let MatrizC = MatrizA;

      for (let i = 0; i<MatrizC.length; i++){
        for (let j = 0; j<MatrizC[i].length; j++){
        
        MatrizC[i][j] = (MatrizA[i][j] + MatrizB[i][j]);        
        }
        }
        return MatrizC;
    }
    else return "Las matrices son de anchuras distintas.";


    }
    else return "Las matrices son de alturas distintas.";
  }

Resta (MatrizA, MatrizB){

    let dif = 0;
    
      if (MatrizA.length==MatrizB.length){
    
        for (let i = 0; i<MatrizA.length; i++){
    
          if (MatrizA[i].length!=MatrizB[i].length)
          dif++;
    
        }
    
        if (dif==0){
    
          let MatrizC = MatrizA;
    
          for (let i = 0; i<MatrizC.length; i++){
            for (let j = 0; j<MatrizC[i].length; j++){
            
            MatrizC[i][j] = (MatrizA[i][j] - MatrizB[i][j]);        
            }
            }
            return MatrizC;
        }
        else return "Las matrices son de anchuras distintas.";
    
    
        }
        else return "Las matrices son de alturas distintas.";
}

Prod (MatrizA, MatrizB){

  let dif = 0;
  
    if (MatrizA.length==MatrizB.length){
  
      for (let i = 0; i<MatrizA.length; i++){
  
        if (MatrizA[i].length!=MatrizB[i].length)
        dif++;
  
      }
  
      if (dif==0){

        let MatrizC = MatrizA.map((fila, i) => MatrizB[0].map((_, j) =>
      fila.reduce((sum, valor, k) => sum + valor * MatrizB[k][j], 0))
  );
  return MatrizC;
      }
      else return "Las matrices son de anchuras distintas.";

      }
      else return "Las matrices son de alturas distintas.";
    }


  getTranspuesta(Matriz) {
  return Matriz[0].map((_, i) => Matriz.map(fila => fila[i]));
  } 

  getCofactor(Matriz, fila, columna){
    let cofactor = [];

    for (let i = 0; i < Matriz.length; i++) {
        if (i !== fila) {
            let filaCofactor = [];
            for (let j = 0; j < Matriz[0].length; j++){
                if (j !== columna) {
                    filaCofactor.push(Matriz[i][j]);
                }
            }
            if (filaCofactor.length > 0){
                cofactor.push(filaCofactor);
        
            }
        }
    }
    return cofactor;
}

  ProductoEscalar(Matriz, Escalar) {
    
    const MatrizProdEscalar = [];
    for (let i = 0; i < Matriz.length; i++) {
        const fila = [];
        for (let j = 0; j < Matriz[0].length; j++) {
            fila.push(Matriz[i][j] * Escalar);
        }
        MatrizProdEscalar.push(fila);
    }
    return MatrizProdEscalar;
}
getTranspuestaInversa(Matriz){

    let MatrizTranspuesta = [];
    for (let i = 0; i < Matriz[0].length; i++) {
        let fila = [];
        for (let j = 0; j < Matriz.length; j++) {
            fila.push(Matriz[j][i]);
        }
        MatrizTranspuesta.push(fila);
    }
    return MatrizTranspuesta;
}

getDeterminante(Matriz){
    // Caso Base (1x1 o 2x2)
    if (Matriz.length === 1) {
        return Matriz[0][0];
    }
    if (Matriz.length === 2) {
        return Matriz[0][0] * Matriz[1][1] - Matriz[0][1] * Matriz[1][0];
    }

    // Casos de 3x3 en adelante... (Por método de Cofactores)
    let determinante = 0;
    for (let j=0; j<Matriz.length; j++) {
        const cofactor = this.getCofactor(Matriz, 0, j);
        determinante += Matriz[0][j] * (-1)**(2+j) * this.getDeterminante(cofactor);
    }
    return determinante;

}
getAdjunta(Matriz){
    
    // Matriz de Cofactores
    const MatrizCofactores = [];
    for (let i = 0; i < Matriz.length; i++) {
        const fila = [];
        for (let j = 0; j < Matriz.length; j++) {
            const cofactor = this.getCofactor(Matriz, i, j);
            fila.push((-1)**(i+j+2) * this.getDeterminante(cofactor));
        }
        MatrizCofactores.push(fila);
    }
    // Matriz adjunta
    const MatrizAdjunta = this.getTranspuestaInversa(MatrizCofactores);
    return MatrizAdjunta;
}

getInversa(Matriz){

  let dif = 0;
  for (let i = 0; i<Matriz.length; i++){

    if (Matriz[i].length!=Matriz.length)

dif++;
  }
  if (dif!=0){
        return "La matriz no es cuadrada.";

    }

    const determinante = this.getDeterminante(Matriz);
    if (determinante === 0) return "El determinante no puede ser 0, no existe inversa.";
    const adjunta = this.getAdjunta(Matriz);

    const MatrizInversa = this.ProductoEscalar(adjunta, 1/determinante);
    return MatrizInversa; 

}

getIntegral(a, b, f){ // Metodo de Simpson 1/3

    const n = 6;
    let sum = 0;

    let h=(b-a)/n;
  for(let i=1;i<n;i++){
   let x=a+i*h;
    if(i%2==0){
      sum=sum+2*f(x);
    }
    else{
      sum=sum+4*f(x);
    }
  }
 let integral=(h/3)*(f(a)+f(b)+sum);

  return integral;

}

getRoots(a, b){ // Metodo de Bisección

  let Error = 0.01;
    
    function f(x){

    return x*x*x - x*x + 2; //x^3 - x^2  + 2
    
    }


  if (f(a) * f(b) >= 0){
            
            return "Los valores introducidos son incorrectos.";
        }else{

    let c = a;
        while ((b-a) >= Error){

            // Se halla punto medio
           var Xr = (a+b)/2;
   
            // Se checkea la raiz
            if (f(Xr) == 0.0)
                break;
   
            // Se repiten los pasos
            else if (f(Xr)*f(a) < 0)
                b = Xr;
            else
                a = Xr;

              
        }
        return Xr;    
}
}

}

module.exports = Ope;
