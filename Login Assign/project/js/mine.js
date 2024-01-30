container=[]
if( localStorage.getItem("logIn")!=null){
    container=JSON.parse(localStorage.getItem("logIn"));
   logIn()
}
function logIn(){
    if( document.getElementById("nameId").value !=""||
    document.getElementById("emailId").value !=""||
    document.getElementById("passId").value !=""){
    if (emailExist()==false){
            var info ={
     nameInfo: document.getElementById("nameId").value ,
     emailInfo:document.getElementById("emailId").value ,
        passInfo:document.getElementById("passId").value,  }
     container.push(info)
     localStorage.setItem("users",JSON.stringify(container))
            console.log(container)
            clearInfo()
        }
        
        else{
            document.getElementById("para").innerHTML="Values required ! "
        }
        
    
}
}
function emailExist(){
    for (var i=0 ;i<container.length; i++ ){
        if( container[i].emailInfo==document.getElementById("emailId").value){
            document.getElementById("exist").innerHTML="Email is already exist ! "


        }
        return true
    }
    return false
    }


    
   



function clearInfo () {
    emailInfo:document.getElementById("emailId").value=null ;

    passInfo:document.getElementById("passId").value =null;
    nameInfo: document.getElementById("nameId").value=null

}