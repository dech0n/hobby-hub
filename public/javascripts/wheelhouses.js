// makes My Wheelhouse nav button bold when it is the active page
const wheelhouseNavBtn = document.querySelector("#wheelhouseBtn");
wheelhouseNavBtn.classList.add('active-nav-link')



const wheelhouseBtns = document.querySelectorAll('.wheelhouseLink');

window.addEventListener('load', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink'
    })
    allBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/wheelhouse/all');
        hobbies = await res.json();

        const hobbiesDiv = document.querySelector('.hobbies')
        hobbiesDiv.innerHTML = ''

        hobbies.forEach(hobby => {

            const link = document.createElement('a')
            link.setAttribute('href', `/hobbies/${hobby.id}`)
            link.setAttribute('class', 'hobby_links')
            // link.innerHTML = `${hobby.title}`
            hobbiesDiv.appendChild(link);

            const hobbyDiv = document.createElement('div')
            hobbyDiv.setAttribute('class', 'hobbies__content');
            hobbyDiv.setAttribute('href', `/hobbies/${hobby.id}`)
            link.appendChild(hobbyDiv);

            // create & append the div for the top half of the hobby card
            const topOfHobbyDiv = document.createElement('div')
            topOfHobbyDiv.setAttribute('class', 'top_half')
            hobbyDiv.appendChild(topOfHobbyDiv)

            // create & append the div for the bottom half of the hobby card
            const bottomOfHobbyDiv = document.createElement('div')
            bottomOfHobbyDiv.setAttribute('class', 'bottom_half')
            hobbyDiv.appendChild(bottomOfHobbyDiv)


            const img = document.createElement('img')
            img.setAttribute('src', `${hobby.img}`)
            img.setAttribute('alt', 'illustration of the hobby')
            img.setAttribute('class', 'hobby_image');
            topOfHobbyDiv.appendChild(img);

            const title = document.createElement('p')
            title.setAttribute('class', 'hobby_title');
            title.innerHTML = `${hobby.title}`;
            topOfHobbyDiv.appendChild(title);

            const description = document.createElement('p')
            description.setAttribute('class', 'hobby_description');
            description.innerHTML = `${hobby.description}`;
            bottomOfHobbyDiv.appendChild(description);
        })
    } catch (e) {
        console.error('Error on load!', e.message)
    }

})

const allBtn = document.getElementById('all');

allBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink'
    })
    allBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/wheelhouse/all');
        hobbies = await res.json();

        const hobbiesDiv = document.querySelector('.hobbies')
        hobbiesDiv.innerHTML = ''

        hobbies.forEach(hobby => {

            const link = document.createElement('a')
            link.setAttribute('href', `/hobbies/${hobby.id}`)
            link.setAttribute('class', 'hobby_links')
            // link.innerHTML = `${hobby.title}`
            hobbiesDiv.appendChild(link);

            const hobbyDiv = document.createElement('div')
            hobbyDiv.setAttribute('class', 'hobbies__content');
            hobbyDiv.setAttribute('href', `/hobbies/${hobby.id}`)
            link.appendChild(hobbyDiv);

            // create & append the div for the top half of the hobby card
            const topOfHobbyDiv = document.createElement('div')
            topOfHobbyDiv.setAttribute('class', 'top_half')
            hobbyDiv.appendChild(topOfHobbyDiv)

            // create & append the div for the bottom half of the hobby card
            const bottomOfHobbyDiv = document.createElement('div')
            bottomOfHobbyDiv.setAttribute('class', 'bottom_half')
            hobbyDiv.appendChild(bottomOfHobbyDiv)


            const img = document.createElement('img')
            img.setAttribute('src', `${hobby.img}`)
            img.setAttribute('alt', 'illustration of the hobby')
            img.setAttribute('class', 'hobby_image');
            topOfHobbyDiv.appendChild(img);

            const title = document.createElement('p')
            title.setAttribute('class', 'hobby_title');
            title.innerHTML = `${hobby.title}`;
            topOfHobbyDiv.appendChild(title);

            const description = document.createElement('p')
            description.setAttribute('class', 'hobby_description');
            description.innerHTML = `${hobby.description}`;
            bottomOfHobbyDiv.appendChild(description);
        })
    } catch (e) {
        console.error('Error -- all btn', e.message)
    }

})

const wantToLearnBtn = document.getElementById('Want to Learn');

wantToLearnBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink'
    })
    wantToLearnBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/wheelhouse/wantToLearn');
        hobbies = await res.json();

        const hobbiesDiv = document.querySelector('.hobbies')
        hobbiesDiv.innerHTML = ''

        hobbies.forEach(hobby => {

            const link = document.createElement('a')
            link.setAttribute('href', `/hobbies/${hobby.id}`)
            link.setAttribute('class', 'hobby_links')
            // link.innerHTML = `${hobby.title}`
            hobbiesDiv.appendChild(link);

            const hobbyDiv = document.createElement('div')
            hobbyDiv.setAttribute('class', 'hobbies__content');
            hobbyDiv.setAttribute('href', `/hobbies/${hobby.id}`)
            link.appendChild(hobbyDiv);

            // create & append the div for the top half of the hobby card
            const topOfHobbyDiv = document.createElement('div')
            topOfHobbyDiv.setAttribute('class', 'top_half')
            hobbyDiv.appendChild(topOfHobbyDiv)

            // create & append the div for the bottom half of the hobby card
            const bottomOfHobbyDiv = document.createElement('div')
            bottomOfHobbyDiv.setAttribute('class', 'bottom_half')
            hobbyDiv.appendChild(bottomOfHobbyDiv)


            const img = document.createElement('img')
            img.setAttribute('src', `${hobby.img}`)
            img.setAttribute('alt', 'illustration of the hobby')
            img.setAttribute('class', 'hobby_image');
            topOfHobbyDiv.appendChild(img);

            const title = document.createElement('p')
            title.setAttribute('class', 'hobby_title');
            title.innerHTML = `${hobby.title}`;
            topOfHobbyDiv.appendChild(title);

            const description = document.createElement('p')
            description.setAttribute('class', 'hobby_description');
            description.innerHTML = `${hobby.description}`;
            bottomOfHobbyDiv.appendChild(description);
        })

    } catch (e) {
        console.error('Error -- want to learn btn', e.message)
    }
})

const currentlyLearningBtn = document.getElementById('Currently Learning');

currentlyLearningBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink'
    })
    currentlyLearningBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/wheelhouse/currentlyLearning');
        hobbies = await res.json();

        const hobbiesDiv = document.querySelector('.hobbies')
        hobbiesDiv.innerHTML = ''

        hobbies.forEach(hobby => {

            const link = document.createElement('a')
            link.setAttribute('href', `/hobbies/${hobby.id}`)
            link.setAttribute('class', 'hobby_links')
            // link.innerHTML = `${hobby.title}`
            hobbiesDiv.appendChild(link);

            const hobbyDiv = document.createElement('div')
            hobbyDiv.setAttribute('class', 'hobbies__content');
            hobbyDiv.setAttribute('href', `/hobbies/${hobby.id}`)
            link.appendChild(hobbyDiv);

            // create & append the div for the top half of the hobby card
            const topOfHobbyDiv = document.createElement('div')
            topOfHobbyDiv.setAttribute('class', 'top_half')
            hobbyDiv.appendChild(topOfHobbyDiv)

            // create & append the div for the bottom half of the hobby card
            const bottomOfHobbyDiv = document.createElement('div')
            bottomOfHobbyDiv.setAttribute('class', 'bottom_half')
            hobbyDiv.appendChild(bottomOfHobbyDiv)


            const img = document.createElement('img')
            img.setAttribute('src', `${hobby.img}`)
            img.setAttribute('alt', 'illustration of the hobby')
            img.setAttribute('class', 'hobby_image');
            topOfHobbyDiv.appendChild(img);

            const title = document.createElement('p')
            title.setAttribute('class', 'hobby_title');
            title.innerHTML = `${hobby.title}`;
            topOfHobbyDiv.appendChild(title);

            const description = document.createElement('p')
            description.setAttribute('class', 'hobby_description');
            description.innerHTML = `${hobby.description}`;
            bottomOfHobbyDiv.appendChild(description);
        })

    } catch (e) {
        console.error('Error -- currently learning btn', e.message)
    }
})

const accomplishedBtn = document.getElementById('Accomplished');

accomplishedBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink'
    })
    accomplishedBtn.className = 'wheelhouseLink active'

    try {
        const res = await fetch('/api/wheelhouse/accomplished');
        hobbies = await res.json();

        const hobbiesDiv = document.querySelector('.hobbies')
        hobbiesDiv.innerHTML = ''

        hobbies.forEach(hobby => {

            const link = document.createElement('a')
            link.setAttribute('href', `/hobbies/${hobby.id}`)
            link.setAttribute('class', 'hobby_links')
            // link.innerHTML = `${hobby.title}`
            hobbiesDiv.appendChild(link);

            const hobbyDiv = document.createElement('div')
            hobbyDiv.setAttribute('class', 'hobbies__content');
            hobbyDiv.setAttribute('href', `/hobbies/${hobby.id}`)
            link.appendChild(hobbyDiv);

            // create & append the div for the top half of the hobby card
            const topOfHobbyDiv = document.createElement('div')
            topOfHobbyDiv.setAttribute('class', 'top_half')
            hobbyDiv.appendChild(topOfHobbyDiv)

            // create & append the div for the bottom half of the hobby card
            const bottomOfHobbyDiv = document.createElement('div')
            bottomOfHobbyDiv.setAttribute('class', 'bottom_half')
            hobbyDiv.appendChild(bottomOfHobbyDiv)


            const img = document.createElement('img')
            img.setAttribute('src', `${hobby.img}`)
            img.setAttribute('alt', 'illustration of the hobby')
            img.setAttribute('class', 'hobby_image');
            topOfHobbyDiv.appendChild(img);

            const title = document.createElement('p')
            title.setAttribute('class', 'hobby_title');
            title.innerHTML = `${hobby.title}`;
            topOfHobbyDiv.appendChild(title);

            const description = document.createElement('p')
            description.setAttribute('class', 'hobby_description');
            description.innerHTML = `${hobby.description}`;
            bottomOfHobbyDiv.appendChild(description);
        })

    } catch (e) {
        console.error('Error -- accomplished btn', e.message)
    }
})
