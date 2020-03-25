alert("alert");

let turno= true;

/*const boton1=document.querySelector("#c1");*/

const botones=document.querySelectorAll(".div1");
const reiniciar=document.querySelector("#reset");
let continuar=true;
let ganadasx = 0;
let ganadaso = 0;
let empates = 0;

function Update(){
    //document.querySelector("marcador").textContent = "X:"+ganadasx + "O:"+ganadaso + "sin humillaciones" + empates;
    document.querySelector("#marcadorx").textContent = ganadasx;
    document.querySelector("#marcadoro").textContent = ganadaso;
    document.querySelector("#marcadorem").textContent = empates;
}


for(let i=0; i<botones.length; i++)
{
    botones[i].addEventListener("click", (e)=>
    {
        

        if(turno&&e.target.innerHTML===""&& continuar)
        {
            contador++;
             e.target.innerHTML= "0";  
             turno=!turno;
             
             if(ganador()===0){
                 document.querySelector("body").classList.add("verde");
                 ganadaso++;
                 document.querySelector("#winner").textContent = "winner winner chicken dinner O";
                 Update()
             }
        }
        else if(e.target.innerHTML==="" && continuar){
            contador++;
            e.target.innerHTML= "X";
            turno=!turno;
            if(ganador()===1){
                document.querySelector("body").classList.add("rojo");
                ganadas++;
                 document.querySelector("#winner").textContent="winner winner chicken dinner X";
                 Update()
             }
         }
         if(ganador()===1){
             document.querySelector("#winner").textContent = "Ninguno se humillo";
             
             
         }
    
         });
}


reiniciar.addEventListener("click", (e)=>
{
    continuar=true;
    contador = 0;
    document.querySelector("#winner").textContent = "";
    for(let i=0;i<botones.length;i++)
    {
        botones[i].innerHTML="";
    }
});


const lista=[  [0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6]
            ];

    let contador =0;      

function ganador()       /*verifica la jugada*/    /*ganador con las celdas c1,c2,c3*/  
{
    
  for(let i=0;i<lista.length;i++)
  {
    if(botones[lista[i][0]].innerHTML==="0" && botones[lista[i][1]].innerHTML==="0"&& botones[lista[i][2]].innerHTML==="0")
    {
      alert("gano O"); 
      continuar=false;
      return 0;

    }else if(botones[lista[i][0]].innerHTML==="X" && botones[lista[i][1]].innerHTML==="X"  && botones[lista[i][2]].innerHTML==="X")
     {
      alert("gano x")
      continuar=false;
      return 1;
     }
  }

  if(contador===9)
{
    alert("empate")
    continuar=false;
    return -1;
}
}







/*boton1.addEventListener("click", (e)=>{
    console.log(e);
   if(turno)
   {
    e.target.innerHTML= "0";  
    turno=!turno;
   }
   else{
    e.target.innerHTML= "X";
    turno=!turno;
   }
    
});
*/
