const wheelhouseBtns = document.querySelectorAll('.wheelhouseLink')

const allBtn = document.getElementById('all');

allBtn.addEventListener('click', async () => {
    allBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/all');
        wheelhouses = await res.json();
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

        hobbies.forEach(hobby => {
            const hobbyDiv = document.createElement('div')
            hobbyDiv.setAttribute('class', 'hobbies__content');
            hobbyDiv.setAttribute('href', `/hobbies/${hobby.id}`)
            hobbiesDiv.appendChild(hobbyDiv);

            const link = document.createElement('a')
            link.setAttribute('href', `/hobbies/${hobby.id}`)
            link.setAttribute('class', 'hobby_links')
            link.innerHTML = `${hobby.title}`
            hobbyDiv.appendChild(link);

            const img = document.createElement('img')
            img.setAttribute('src', `${hobby.img}`)
            img.setAttribute('alt', 'illustration of the hobby')
            img.setAttribute('class', 'hobby_image');
            hobbyDiv.appendChild(img);

            const title = document.createElement('p')
            title.setAttribute('class', 'hobby_title');
            title.innerHTML = `${hobby.title}`;
            hobbyDiv.appendChild(title);
            
            const description = document.createElement('p')
            description.setAttribute('class', 'hobby_description');
            description.innerHTML = `${hobby.description}`;
            hobbyDiv.appendChild(description);
        })
    } catch (e) {
        console.log(e)
    }
})

const wantToLearnBtn = document.getElementById('Want to Learn');

wantToLearnBtn.addEventListener('click', async () => {
    wantToLearnBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/wantToLearn');
        wheelhouse = await res.json();
        const hobbiesDiv = document.querySelector('.hobbies')
        let userHobbies = wheelhouse.UserHobbies

    console.log(userHobbies)  
    } catch (e) {
        console.log('whoops')
    }      
})

const currentlyLearningBtn = document.getElementById('Currently Learning');

currentlyLearningBtn.addEventListener('click', () => {
    currentlyLearningBtn.className = 'wheelhouseLink active'
})

const accomplishedBtn = document.getElementById('Accomplished');

accomplishedBtn.addEventListener('click', () => {
    accomplishedBtn.className = 'wheelhouseLink active'
})




