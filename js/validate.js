const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    var name = document.getElementById('inputName').value;
    var code = document.getElementById('inputPassword').value;
    var statt = 1;    
    
    //nema free hosting za php mora vaka :)
    if((name == "leo" && code == "indov") 
       || (name == "naum" && code == "fam97")
       || (name == "dimi" && code == "9797s")
      ){
        statt = -1;
    }
    
    if(statt == 1){
        e.preventDefault();
        alert("Невалидно! Обидете се повторно!");
    }
});