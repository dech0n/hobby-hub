// makes My Wheelhouse nav button bold when it is the active page
const wheelhouseNavBtn = document.querySelector("#wheelhouseBtn");
wheelhouseNavBtn.classList.add('active-nav-link')

///////////////

const wheelhouseBtns = document.querySelectorAll('.wheelhouseLink');

// fetch hobbies from API route
const getHobbies = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

// remove all hobbies from page
const removeHobbies = (allHobbiesContainer) => {
    allHobbiesContainer.innerHTML = '';
}

// create a container to hold a single hobby
const createContainer = (tag) => {
    return document.createElement(tag);
}

// create an a-tag and append the hobby container as a child element, creating a hyperlink to an individual page for that hobby
const makeHobbyContainerIntoLink = (hobby, allHobbiesContainer, singleHobbyContainer) => {
    const link = createContainer('a');
    link.setAttribute('href', `/hobbies/${hobby.id}`);
    link.setAttribute('class', 'hobby_links');
    allHobbiesContainer.appendChild(link);

    singleHobbyContainer.setAttribute('class', 'hobbies__content');
    singleHobbyContainer.setAttribute('href', `/hobbies/${hobby.id}`);
    link.appendChild(singleHobbyContainer);
}

// create the hobby card, including the containers for the top half and bottom half of the card
const createHobbyCard = (singleHobbyContainer, cardNumber) => {
    // create & append the div for the top half of the hobby card
    const topOfHobbyDiv = createContainer('div');
    topOfHobbyDiv.setAttribute('class', `top_half card-${cardNumber}__top_half`);
    singleHobbyContainer.classList.add(`card-${cardNumber}`);
    singleHobbyContainer.appendChild(topOfHobbyDiv);

    // create & append the div for the bottom half of the hobby card
    const bottomOfHobbyDiv = createContainer('div');
    bottomOfHobbyDiv.setAttribute('class', `bottom_half card-${cardNumber}__bottom_half`);
    singleHobbyContainer.appendChild(bottomOfHobbyDiv);
}

// set the associated hobby image on the hobby card
const setHobbyImage = (hobby, topHalfOfCard) => {
    const img = createContainer('img');
    img.setAttribute('src', `${hobby.img}`);
    img.setAttribute('alt', 'illustration of the hobby');
    img.setAttribute('class', 'hobby_image');
    topHalfOfCard.appendChild(img);
}

// set the associated hobby title on the hobby card
const setHobbyTitle = (hobby, topHalfOfCard) => {
    const title = createContainer('p');
    title.setAttribute('class', 'hobby_title');
    title.innerHTML = `${hobby.title}`;
    topHalfOfCard.appendChild(title);
}

// set the associated hobby description on the hobby card
const setHobbyDescription = (hobby, bottomHalfOfCard) => {
    const description = createContainer('p');
    description.setAttribute('class', 'hobby_description');
    description.innerHTML = `${hobby.description}`;
    bottomHalfOfCard.appendChild(description);
}

window.addEventListener('load', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink'
    });
    allBtn.className = 'wheelhouseLink active';

    try {
        // used to create a unique class for each hobby card
        let cardNumber = 0;

        const hobbiesDiv = document.querySelector('.hobbies');
        // clear previous hobbies from page
        removeHobbies(hobbiesDiv);

        // get all hobbies for this wheelhouse status status
        const hobbies = await getHobbies('/api/wheelhouse/all');

        hobbies.forEach(hobby => {
            // create a container for the hobby
            const hobbyDiv = createContainer('div')

            makeHobbyContainerIntoLink(hobby, hobbiesDiv, hobbyDiv);

            createHobbyCard(hobbyDiv, cardNumber);

            const topOfHobbyDiv = document.querySelector(`.card-${cardNumber}__top_half`);
            const bottomOfHobbyDiv = document.querySelector(`.card-${cardNumber}__bottom_half`);

            setHobbyImage(hobby, topOfHobbyDiv);

            setHobbyTitle(hobby, topOfHobbyDiv);

            setHobbyDescription(hobby, bottomOfHobbyDiv);
            cardNumber++;
        })
    } catch (e) {
        console.error('Error on load!', e.message);
    }

})

const allBtn = document.getElementById('all');

allBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink';
    })
    allBtn.className = 'wheelhouseLink active';

    try {
        let cardNumber = 0;
        const hobbiesDiv = document.querySelector('.hobbies');
        removeHobbies(hobbiesDiv);
        const hobbies = await getHobbies('/api/wheelhouse/all');

        hobbies.forEach(hobby => {
            // create a container for the hobby
            const hobbyDiv = createContainer('div')

            makeHobbyContainerIntoLink(hobby, hobbiesDiv, hobbyDiv);

            createHobbyCard(hobbyDiv, cardNumber);

            const topOfHobbyDiv = document.querySelector(`.card-${cardNumber}__top_half`);
            const bottomOfHobbyDiv = document.querySelector(`.card-${cardNumber}__bottom_half`);

            setHobbyImage(hobby, topOfHobbyDiv);

            setHobbyTitle(hobby, topOfHobbyDiv);

            setHobbyDescription(hobby, bottomOfHobbyDiv);
            cardNumber++;
        });
    } catch (e) {
        console.error('Error -- all btn', e.message);
    }
});

const wantToLearnBtn = document.getElementById('Want to Learn');

wantToLearnBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink';
    })
    wantToLearnBtn.className = 'wheelhouseLink active';

    try {
        let cardNumber = 0;
        const hobbiesDiv = document.querySelector('.hobbies');
        removeHobbies(hobbiesDiv);
        const hobbies = await getHobbies('/api/wheelhouse/wantToLearn');

        hobbies.forEach(hobby => {
            // create a container for the hobby
            const hobbyDiv = createContainer('div')

            makeHobbyContainerIntoLink(hobby, hobbiesDiv, hobbyDiv);

            createHobbyCard(hobbyDiv, cardNumber);

            const topOfHobbyDiv = document.querySelector(`.card-${cardNumber}__top_half`);
            const bottomOfHobbyDiv = document.querySelector(`.card-${cardNumber}__bottom_half`);

            setHobbyImage(hobby, topOfHobbyDiv);

            setHobbyTitle(hobby, topOfHobbyDiv);

            setHobbyDescription(hobby, bottomOfHobbyDiv);
            cardNumber++;
        });
    } catch (e) {
        console.error('Error -- want to learn btn', e.message)
    }
});

const currentlyLearningBtn = document.getElementById('Currently Learning');

currentlyLearningBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink';
    });
    currentlyLearningBtn.className = 'wheelhouseLink active';

    try {
        let cardNumber = 0;
        const hobbiesDiv = document.querySelector('.hobbies');
        removeHobbies(hobbiesDiv);
        const hobbies = await getHobbies('/api/wheelhouse/currentlyLearning');

        hobbies.forEach(hobby => {
            // create a container for the hobby
            const hobbyDiv = createContainer('div')

            makeHobbyContainerIntoLink(hobby, hobbiesDiv, hobbyDiv);

            createHobbyCard(hobbyDiv, cardNumber);

            const topOfHobbyDiv = document.querySelector(`.card-${cardNumber}__top_half`);
            const bottomOfHobbyDiv = document.querySelector(`.card-${cardNumber}__bottom_half`);

            setHobbyImage(hobby, topOfHobbyDiv);

            setHobbyTitle(hobby, topOfHobbyDiv);

            setHobbyDescription(hobby, bottomOfHobbyDiv);
            cardNumber++;
        })

    } catch (e) {
        console.error('Error -- currently learning btn', e.message);
    }
})

const accomplishedBtn = document.getElementById('Accomplished');

accomplishedBtn.addEventListener('click', async () => {

    wheelhouseBtns.forEach(btn => {
        btn.className = 'wheelhouseLink';
    });
    accomplishedBtn.className = 'wheelhouseLink active';

    try {
        let cardNumber = 0;
        const hobbiesDiv = document.querySelector('.hobbies');
        removeHobbies(hobbiesDiv);
        const hobbies = await getHobbies('/api/wheelhouse/accomplished');

        hobbies.forEach(hobby => {
            // create a container for the hobby
            const hobbyDiv = createContainer('div')

            makeHobbyContainerIntoLink(hobby, hobbiesDiv, hobbyDiv);

            createHobbyCard(hobbyDiv, cardNumber);

            const topOfHobbyDiv = document.querySelector(`.card-${cardNumber}__top_half`);
            const bottomOfHobbyDiv = document.querySelector(`.card-${cardNumber}__bottom_half`);

            setHobbyImage(hobby, topOfHobbyDiv);

            setHobbyTitle(hobby, topOfHobbyDiv);

            setHobbyDescription(hobby, bottomOfHobbyDiv);
            cardNumber++;
        });

    } catch (e) {
        console.error('Error -- accomplished btn', e.message);
    }
});
