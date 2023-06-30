function handleForm(event){
    event.preventDefault();
    const form = document.getElementById("emailGitForm");
    const formData = new FormData(form);
    
    fetch('https://httpbin.org/post', {
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
    
        /*fetch('/submit-form', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        */
}