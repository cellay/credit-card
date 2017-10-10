function isValidCard(){
      var newArr = 0;
      var num = prompt('').split('').reverse();
      while(num.length < 16 || num.length > 16){
        num = prompt('El nùmero de dígitos ingresado no es correcto');
      }
        for(var i = 0; i < num.length; i++){
        var values = parseInt(num[i]);
          if(i % 2 === 0){
          newArr += values;
        }
          if(i % 2 !== 0){
           if((values * 2) <= 9 ){
           newArr += (values * 2);
          }
            if ((values * 2) > 9){
              var digits = (values * 2);
                for (var j = 0; j <digits.length;j++){
  	            newArr += parseInt(digits[j]);
              }
          }
        }
      }
      if(newArr % 10 === 0){
        alert("La tarjeta de crédito es válida");
      }
      else 
        alert("La tarjeta de crédito no es válida");
    }

isValidCard()