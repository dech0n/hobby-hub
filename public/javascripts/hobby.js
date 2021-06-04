const addToWheelhouseBtn = document.getElementById("add-to-wheelhouse-button");
const selectStatus = document.getElementById("select-status");
const hobbyId = document.querySelector('.title-description').id;

addToWheelhouseBtn.addEventListener("click", async () => {
  const wheelhouseId = selectStatus.value;

  const res = await fetch(`/api/wheelhouse/${wheelhouseId}/hobby/${hobbyId}`, { method: 'POST' })

  if (res.ok) {
    addToWheelhouseBtn.classList.add('checked');
    addToWheelhouseBtn.innerText = 'Added!'
  }
});

const addExperienceButton = document.getElementById('add-experience-button');
const editExperienceButton = document.getElementById('edit-experience-button')
const deleteExperienceButton = document.getElementById('delete-experience-button')

const getAllExperiences = async (hobbyId) => {
  const experiencesContainer = document.getElementById('experiences-container');
  const res = await fetch(`/api/experiences/hobbies/${hobbyId}`)
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    // is data iterable? iterate through and create experience divs/ps for each experience
    // experiencesContainer.innerHTML = data;
  }
}

addExperienceButton.addEventListener('click', async (event) => {
  // grab textarea value
  // grab userId and hobbyId
  // call put fetch request to create new experience with message, userId, and hobbyId
  // grab #experience-container div and set inner HTML to empty
  // call get fetch request to get all experiences
  // set inner HTML of div to result
  event.preventDefault();
  const message = document.getElementById('experience-message-input').value;
  if (!message) return;

  try {
    const res = await fetch(`/api/experiences/hobbies/${hobbyId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    console.log(res);
    if (res.ok) {
      console.log(data);
      getAllExperiences(hobbyId);
    }
  } catch (e) {
      console.error(e.message);
  }
});

editExperienceButton.addEventListener('click', async (event) => {
  // const experienceDiv = ;
  const experienceId = experienceDiv.id;
  const resGet = await fetch(`api/experiences/${experienceId}`);
  const experience = await resGet.json();
  const message = experience.message;

  if (res.ok) {
    experienceDiv.innerHTML = '';
    const editTextarea = document.createElement('textarea');
    editTextarea.classList.add('message-textarea');
    editTextarea.value = message;
    experienceDiv.appendChild(editTextarea);
    const postBtn = document.createElement('button');
    postBtn.innerHTML = 'Post';
    // add event listener
    const deleteBtn = document.createElement('button')
    // add event listener
    deleteBtn.innerHTML = 'Delete';
    experienceDiv.appendChild(postBtn);
    experienceDiv.appendChild(deleteBtn);

  }

  const res = await fetch()

  if (res.ok) {

  }
});

deleteExperienceButton.addEventListener('click', async () => {});
