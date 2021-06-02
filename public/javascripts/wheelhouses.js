window.addEventListener('load', async () => {
    
    try {
        const res = await fetch('/api/all');
        const wheelhouses = await res.json();
        const hobbiesDiv = document.querySelector('.hobbies')
        let userHobbies = []
        wheelhouses.forEach(wheelhouse => {
            userHobbies.push(wheelhouse.UserHobbies)
        })
        let hobbies = []
        userHobbies.forEach(userHobby => {
            userHobby.forEach(ele => {
                hobbies.push(ele.Hobby)
            })
        })
        
        console.log(hobbies)
    } catch (e) {
        console.log(e)
    }
})


