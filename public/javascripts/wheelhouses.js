window.addEventListener('load', async () => {
    
    try {
        const res = await fetch('/api/all');
        const hobbies = await res.json();
        const hobbiesDiv = document.querySelector('.hobbies')
        hobbies.forEach(hobby => {
            const singleHobby = document.createElement('div').setAttribute('class', 'hobby')
            singleHobby.innerHTML = hobby.title
            hobbiesDiv.appendChild(singleHobby)
        })
    } catch (e) {
        console.log(e)
    }
})


