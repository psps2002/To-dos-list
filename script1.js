document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById('submit').addEventListener('click' , function(event){
        event.preventDefault();

    var inputField = document.getElementById('input-field');
    var inputValue = inputField.value;

    if (inputValue != ""){
        document.getElementById('items-list').innerHTML += "<p>" + inputValue + "<button class='remove'>X</button>" + "</p>" ;
        inputField.value ="";
    }
    else{
        alert("PLease enter item");
    }
        
    })
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove')) {
          event.target.parentNode.remove();
        }
      });
        
    });
    