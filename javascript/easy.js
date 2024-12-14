async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const ip = await fetch("https://api.ipify.org?format=json")

    fetch('http://119.247.147.91:12345/login', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
            ip: ip.json().ip
        })

    }).then((response => response.json()))
        .then(data => {
            if (data.valid == true) {
                window.location.href = "./logined.html"
            } else {
                alert("Login Failed");
            }
        }).catch(error => alert("404"));
}

