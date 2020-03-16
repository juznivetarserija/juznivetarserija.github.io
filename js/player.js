function load(){
    var sts = window.location.hash.substr(1);
    if(sts == "prva"){        
        window.location.hash = '__leoi__'; 
        document.title = "ЈУЖНИ ВЕТАР - ПРВА ЕПИЗОДА";
        document.getElementById('frem').src = "https://manyvideos.xyz/embed/f8QIXxOY116PZgA/";
    }else if(sts == "vtora"){
        window.location.hash = '__leoi__'; 
        document.title = "ЈУЖНИ ВЕТАР - ВТОРА ЕПИЗОДА";
        document.getElementById('frem').src = "https://manyvideos.xyz/embed/D6BfuzXHDabivta/";        
    }else if(sts == "treta"){
        window.location.hash = '__leoi__'; 
        document.title = "ЈУЖНИ ВЕТАР - ТРЕТА ЕПИЗОДА";
        document.getElementById('frem').src = "https://manyvideos.xyz/embed/YHieJBz9ZWFMF0I/";        
    }else if(sts == "cetvrta"){
        window.location.hash = '__leoi__';
        document.title = "ЈУЖНИ ВЕТАР - ЧЕТВРТА ЕПИЗОДА";
        document.getElementById('frem').src = "https://manyvideos.xyz/embed/FwW29EXmA4oPapk/";        
    }else if(sts == "petta"){
        window.location.hash = '__leoi__'; 
        document.title = "ЈУЖНИ ВЕТАР - ПЕТТА ЕПИЗОДА";
        document.getElementById('frem').src = "https://manyvideos.xyz/embed/LSNT2aQ131fTTL4/";        
    }else{
       window.location.href = "strana.html";
    }                
}
window.onload = load;