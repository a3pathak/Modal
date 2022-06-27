let popup = document.getElementById('pop');
openPopup();
closePopup();

function openPopup(){
    // let delPost = confirm('Do you really want to submit');
    // if(delPost){
    //     popup.classList.add("open-popup");
    // }
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}