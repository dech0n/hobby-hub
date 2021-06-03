const wheelhouseBtns = document.querySelectorAll('.wheelhouseLink')

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
        console.log('Error on load!', e.message)
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
        console.log('Error -- all btn', e.message)
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
        console.log('Error -- want to learn btn', e.message)
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
        console.log('Error -- currently learning btn', e.message)
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
        console.log('Error -- accomplished btn', e.message)
    } 
})




