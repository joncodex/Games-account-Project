

let users = [];


function signup() {
 

    let email= document.getElementById('email').value;
    
   

    let doesuserexist = users.filter ((user) => {

        return user === email;

    });

    if (doesuserexist.length == 0) {
    users.push(email);
    let alert = document.getElementById('alert-success');
    alert.classList.remove('d-none');
    alert.innerHTML = 'Your account has been created'
    setTimeout (() => {alert.classList.add('d-none')}, 2000)
    
    }
    
    else {
        let alert_danger = document.getElementById('alert_danger');
        alert_danger.classList.remove('d-none');
        alert_danger.innerHTML = 'email already in use'
        setTimeout (() => {alert_danger.classList.add('d-none')}, 2000)
     
    }
   
        

    document.getElementById('showcase').innerHTML = '';

}




    

// } 
// setTimeout( ()=> {
//     document.getElementById('result').classList.add('d-none');
// }, 3000)

// setTimeout( ()=> {
//     document.getElementById('result').classList.remove('d-none');
// }, 3000)
