document.querySelector('.button').onclick = function () {
    let user = document.querySelector('input[name=username2]').value;
    let password = document.querySelector('input[name=password]').value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://localhost:80/sasa/api/register.php?username2=${user}&password=${password}`, true)
    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            if(this.responseText==="注册成功"){
                location.href="http://localhost:80/sasa/html/login.html"
            }
            console.log(this.responseText) ;
        } else {

        }
    }
    xhr.send();
}
