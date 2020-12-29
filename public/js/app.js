const dat = {
    name: "eating",
    "logged-time": "10"
}
document.querySelector('#post-button').addEventListener('click', event => {
    fetch('./api', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(dat)
    }).then(res => {
        if (res.ok){
            return res.json().then(console.log)
        }
        throw Error('response not ok', res)
    }).catch(err => {console.log(err)});
}); 

