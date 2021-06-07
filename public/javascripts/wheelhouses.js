// makes My Wheelhouse nav button bold when it is the active page
const wheelhouseNavBtn = document.querySelector("#wheelhouseBtn");
wheelhouseNavBtn.classList.add('active-nav-link')



const wheelhouseBtns = document.querySelectorAll('.wheelhouseLink');

const getHobbies = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const removeHobbies = (allHobbiesContainer) => {
    allHobbiesContainer.innerHTML = '';
}

const makeHobbyContainerIntoLink = (hobby, allHobbiesContainer, singleHobbyContainer) => {
    const link = document.createElement('a');
    link.setAttribute('href', `/hobbies/${hobby.id}`);
    link.setAttribute('class', 'hobby_links');
    allHobbiesContainer.appendChild(link);

    singleHobbyContainer.setAttribute('class', 'hobbies__content');
    singleHobbyContainer.setAttribute('href', `/hobbies/${hobby.id}`);
    link.appendChild(singleHobbyContainer);
}

const createHobbyCard = (singleHobbyContainer,  cardNumber) => {
    // create & append the div for the top half of the hobby card
    const topOfHobbyDiv = document.createElement('div');
    topOfHobbyDiv.setAttribute('class', `top_half card-${cardNumber}__top_half`);
    singleHobbyContainer.classList.add(`card-${cardNumber}`);
    singleHobbyContainer.appendChild(topOfHobbyDiv);

    // create & append the div for the bottom half of the hobby card
    const bottomOfHobbyDiv = document.createElement('div');
    bottomOfHobbyDiv.setAttribute('class', `bottom_half card-${cardNumber}__bottom_half`);
    singleHobbyContainer.appendChild(bottomOfHobbyDiv);
}

const setHobbyImage = (hobby, topHalfOfCard) => {
    const img = document.createElement('img');
    img.setAttribute('src', `${hobby.img}`);
    img.setAttribute('alt', 'illustration of the hobby');
    img.setAttribute('class', 'hobby_image');
    topHalfOfCard.appendChild(img);
}

const setHobbyTitle = (hobby, topHalfOfCard) => {
    const title = document.createElement('p');
    title.setAttribute('class', 'hobby_title');
    title.innerHTML = `${hobby.title}`;
    topHalfOfCard.appendChild(title);
}

const setHobbyDescription = (hobby, bottomHalfOfCard) => {
    const description = document.createElement('p');
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
        let cardNumber = 0;
        const hobbiesDiv = document.querySelector('.hobbies');
        removeHobbies(hobbiesDiv);
        const hobbies = await getHobbies('/api/wheelhouse/all');

        hobbies.forEach(hobby => {
            // create a container for the hobby
            const hobbyDiv = document.createElement('div');

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
            const hobbyDiv = document.createElement('div');

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
            const hobbyDiv = document.createElement('div');

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
            const hobbyDiv = document.createElement('div');

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
            const hobbyDiv = document.createElement('div');

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
