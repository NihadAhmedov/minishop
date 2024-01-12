const nameInp = document.getElementById('exampleInputName')
const surnameInp = document.getElementById('exampleInputSurname')
const emailInp = document.getElementById('exampleInputEmail1')
const passInp = document.getElementById('exampleInputPassword1')
const form = document.getElementById('form')

function getdorm(e){
    e.preventDefault()

    axios.post('https://655c84d425b76d9884fd7251.mockapi.io/form',{
        name : nameInp.value,
        surname : surnameInp.value,
        password : passInp.value,
        email : emailInp.value
    })
    .then(res =>{
        console.log(res.data);
        form.reset();
    })
}

form.addEventListener('submit', getdorm)
