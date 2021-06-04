if (document.getElementById('demo-user-button')) {
const demoUser = document.getElementById('demo-user-button');

demoUser.addEventListener('click', async () => {
    const res = await fetch('/users/loginDemo', { method: 'POST' });
    try {
        if (res.status === 200) {
        window.location.reload();
        }
    } catch (e) {
        console.log('Error with demo User', e.message)
    }

})
}

<<<<<<< Updated upstream
// const navButtons = document.querySelectorAll('navbar__nav');

// const homeBtn = document.getElementById('homeBtn');

// homeBtn.addEventListener('click', () => {
//     navButtons.forEach(btn => {
//         btn.className = 'navbar__nav'
//     })
//     homeBtn.className = 'navbar__nav active'
// })

// const wheelhouseBtn = document.getElementById('wheelhouseBtn');

// wheelhouseBtn.addEventListener('click', () => {
//     navButtons.forEach(btn => {
//         btn.className = 'navbar__nav'
//     })
//     wheelhouseBtn.className = 'navbar__nav active'
// })

// const hobbiesBtn = document.getElementById('hobbiesBtn');

// hobbiesBtn.addEventListener('click', () => {
//     navButtons.forEach(btn => {
//         btn.className = 'navbar__nav'
//     })
//     hobbiesBtn.className = 'navbar__nav active'
// })
=======
const navButtons = document.querySelectorAll('navbar__nav-link');

const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
    navButtons.forEach(btn => {
        btn.classList.remove('active-nav-link')
    })
    homeBtn.classList.add('active-nav-link')
})

const wheelhouseBtn = document.getElementById('wheelhouseBtn');

wheelhouseBtn.addEventListener('click', () => {
    navButtons.forEach(btn => {
        btn.classList.remove('active-nav-link')
    })
    wheelhouseBtn.classList.add('active-nav-link')
})

const hobbiesBtn = document.getElementById('hobbiesBtn');

hobbiesBtn.addEventListener('click', () => {
    navButtons.forEach(btn => {
        btn.classList.remove('active-nav-link')
    })
    hobbiesBtn.classList.add('active-nav-link')
})
>>>>>>> Stashed changes
