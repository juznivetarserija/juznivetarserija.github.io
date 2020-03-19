const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    var name = document.getElementById('inputName').value;
    var code = document.getElementById('inputPassword').value;
    var statt = 1;    
    
    //nema free hosting za php mora vaka :)
    if((name == "leo" && code == "indov") 
       || (name == "naum" && code == "fam97")
       || (name == "dimi" && code == "9797s")
       || (name == "emir" && code == "emco7")
       || (name == "david" && code == "ljus1")
       || (name == "mihaela" && code == "aa1aa")
       || (name == "leontina" && code == "kiro1")
       || (name == "kobi" && code == "dq2oo")
       || (name == "joco" && code == "bocko")
       || (name == "stefi" && code == "ab5aa")
       || (name == "izum" && code == "pe2cc")
       || (name == "bocko" && code == "6a22c")
       || (name == "hristijan" && code == "99kur")
       || (name == "stolic" && code == "sd5aa")
       || (name == "matej" && code == "pr7kc")
      ){
        statt = -1;
    }
    
    if(statt == 1){
        e.preventDefault();
        alert("Невалидно! Обидете се повторно!");
    }
});
