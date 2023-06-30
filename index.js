function handleForm(event){
    event.preventDefault();
    const form = document.getElementById("emailGitForm");
    const formData = new FormData(form);

    fetch('https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            email: formData.get('email'),
            git: formData.get('git')
        })
    })
        .then(res => {
            if(res.ok) { 
                console.log(res);
                alert("Successful submission");
            }
            else
                alert("Unsuccessful submission"); 
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}