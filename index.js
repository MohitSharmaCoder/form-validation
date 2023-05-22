let nameV = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submit = document.getElementById('submit')

nameV.addEventListener('blur', ()=>{
    console.log("hhhh")
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = nameV.value
    if(regex.test(str)){
        console.log("it matched")
        nameV.classList.remove('is-invalid')
    }
    else{
        nameV.classList.add('is-invalid')
    }
})

email.addEventListener('blur', ()=>{
    console.log("hhhh")
    let regex = /^([_\-\.a-z0-9A-Z]+)@([_\-\.a-z0-9A-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    if(regex.test(str)){
        email.classList.remove('is-invalid')
    }
    else{
        email.classList.add('is-invalid')
    }
})

message.addEventListener('blur', ()=>{
    console.log("hhhh")
    let regex = /^[a-zA-Z]([0-9a-zA-Z!@#&-_]){2,300}$/
    let str = message.value
    if(regex.test(str)){
        console.log("object")
        message.classList.remove('is-invalid')
    }
    else{
        message.classList.add('is-invalid')
    }
})

// submit button
submit.addEventListener("click", (e)=>{
    e.preventDefault()
})
