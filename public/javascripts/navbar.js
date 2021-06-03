if (document.getElementById('demo-user-button')) {
const demoUser = document.getElementById('demo-user-button');

console.log(demoUser)
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