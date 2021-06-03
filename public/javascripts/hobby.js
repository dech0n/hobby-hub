const addToWheelhouseBtn = document.getElementById("add-to-wheelhouse-button");
const selectStatus = document.getElementById("select-status");
const hobbyId = document.querySelector('.title-description');

addToWheelhouseBtn.addEventListener("click", async () => {
  const wheelhouseId = selectStatus.value;

  const res = await fetch(`/api/wheelhouse/${wheelhouseId}/hobby/${hobbyId.id}`, { method: 'POST' })

  if (res.ok) {
    addToWheelhouseBtn.classList.add('checked');
    addToWheelhouseBtn.innerText = 'Added!'
  }
});

const addExperienceButton = document.getElementById('add-experience-button');
const editExperienceButton = document.getElementById('edit-experience-button')
const deleteExperienceButton = document.getElementById('delete-experience-button')

addExperienceButton.addEventListener('click', () => {});

editExperienceButton.addEventListener('click', () => {
  const res = await.fetch()

  if (res.ok) {
    
  }
});

deleteExperienceButton.addEventListener('click', () => {});
