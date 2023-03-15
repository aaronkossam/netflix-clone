const email =document.getElementById('email-1');
const form =document.getElementById('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const emailValue =email.value.trim()
}

if(emailValue=''){
    SetErrorfor(emailValue,'email cannot be empty')
}





