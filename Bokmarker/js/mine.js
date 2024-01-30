
var ma5zan=[]
if( localStorage.getItem("webSite")!=null){
    ma5zan=JSON.parse(localStorage.getItem("webSite"));
    webSite()
}



function webSite (){

    var webSite ={
    sName : document.getElementById("sName").value,
    sUrl: document.getElementById("sUrl").value
    }
    ma5zan.push(webSite)
    console.log(ma5zan)
    clearWeb()
    displayWeb()
    localStorage.setItem("webSite" , JSON.stringify(ma5zan))
}
function clearWeb(){
     document.getElementById("sName").value=null;
     document.getElementById("sUrl").value=null

}
function displayWeb() {
    var cartona="";
    for(var i=0 ; i<ma5zan.length; i++ ){
       cartona+=" <tr> <td> "+ ma5zan[i].sName+"</td>"+
       "<td>" + ma5zan[i].sUrl + "/td>" +
       '<td> <button class="btn btn-primary text-white"> Visit </button> </td>' +
       '<td> <button class="btn btn-danger text-white" onclick="hamada('+i+')"> Delete </button> </td> </tr>' 
       
    }
    document.getElementById("tBody").innerHTML=cartona
}
function hamada(del){
    ma5zan.splice(del,1);
    displayWeb()
    
}