function load(){
    var sts = window.location.hash.substr(1);
    if(sts != "true"){
        window.location.href = "index.html";
    }else{
       window.location.hash = '__leoi__'; 
    }                
}
window.onload = load;