const alertSave = document.querySelector('#alertSave');
function save(){
    alert("Changes save successfully!")
}
alertSave.addEventListener('click', save);

const alertCancel = document.querySelector('#alertCancel');
function cancel(){
    alert("Changes is not being saved.")
}
alertCancel.addEventListener('click', cancel);