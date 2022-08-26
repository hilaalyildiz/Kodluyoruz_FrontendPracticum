let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit',formHandler);
const alertDOM = document.querySelector('#alert');

const alertFunction = (title,message,className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event){
    event.preventDefault();
    const user_name = document.querySelector("#username");
    const score = document.querySelector("#score");

    if(user_name.value && score.value){
        addItem(user_name.value,score.value); // gönderdikten sonra sıfırladık
        user_name="";
        score="";

    } else{
        alertDOM.innerHTML = alertFunction(
            "Baslik bilgisi",
            "Eksik bilgi girdiniz",
            "danger");
    }
}

let userListDOM = document.querySelector('#userList');

const addItem = (userName,score) => {
    let li = document.createElement('li');
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}<span>`
    
    liDOM.classList.add(
        'list-group-item','d-flex',
        'justify-content-between',
        'align-items-center');

    userListDOM.append(liDOM);

}