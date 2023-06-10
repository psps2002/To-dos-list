document.addEventListener('DOMContentLoaded', function() {

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var inputField = document.getElementById('input-field');
    var itemValue = inputField.value;
    if (itemValue != "") {
        document.getElementById('items-list').innerHTML += "<p>" + itemValue + "</p>" ;
        inputField.value = ''; }
    else {
        alert("Please enter an item"); }
    });
});