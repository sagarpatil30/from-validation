const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')

form.addEventListener('submit',function(e){
    e.preventDefault();
 if (username.value === '') {
    showError(username,'Username is required')
 }
 document.write('USERNAME-',username.value,
 'EMAIL-',email.value,
 'PASSWORD-',password.value,
 )
})

//validation