document.querySelector('.button').onclick = function () {
    let user = document.querySelector('input[name=username2]').value;
    let password = document.querySelector('input[name=password]').value;
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:80/sasa/api/login.php', true)

    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            console.log(JSON.parse(this.responseText))
            var a=JSON.parse(this.responseText)
            if(a.result===true){
                
                location.href="http://localhost/sasa/"
            }
            
        } else {
            console.log(123)
        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.send(`username2=${user}&password=${password}`); 
}
