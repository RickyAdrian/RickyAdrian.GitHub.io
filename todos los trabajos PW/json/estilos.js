//USUARIO
//Tomamos los elementos del text
const TxtCorreo = document.querySelector("#Correo");
const TxtPassword = document.querySelector("#Contraseña");

//Tomamos los botones
const ButtSent = document.querySelector(".BtoUs");
const ButtBack = document.querySelector(".BtoSv");

ButtSent.addEventListener("click", (e)=>{
   
    let Myobj ={Correo: TxtCorreo.value, Password: TxtPassword.value};
    let MyJson =JSON.stringify(Myobj);
   
    document.querySelector("#DtRecibidos").textContent = MyJson;
});

ButtBack.addEventListener("click", (e)=>{
    const TxtArea = document.querySelector("#DtRecibidos").value;
    console.log(TxtArea);

    let Myobjb =TxtArea;
    let MyJsonb =JSON.parse(Myobjb);

    console.log(MyJsonb);

    TxtCorreo.value = MyJsonb.Correo;
    TxtPassword.value =MyJsonb.Password;
   
});