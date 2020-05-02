var cont = 0;
document.getElementById("number").defaultValue = cont;
function incrementar(){
    document.getElementById('add')
    cont++;
   // alert(cont);
    document.getElementById("number").defaultValue = cont;
   }
   
   function decrementar(){
    document.getElementById('less')
    cont--;
    //alert(cont);
    document.getElementById("number").defaultValue = cont;
   }
  