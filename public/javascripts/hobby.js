const addToWheelhouseBtn = document.getElementById("add-to-wheelhouse-button");
const selectStatus = document.getElementById("select-status");
const hobbyId = document.querySelector(".title-description").id;

if (addToWheelhouseBtn) {
  addToWheelhouseBtn.addEventListener("click", async () => {
    const wheelhouseId = selectStatus.value;

    const res = await fetch(`/api/wheelhouse/${wheelhouseId}/hobby/${hobbyId}`, {
      method: "POST",
    });

    if (res.ok) {
      addToWheelhouseBtn.classList.add("checked");
      addToWheelhouseBtn.innerText = "Added!";
    }
  });
}

const addExperienceButton = document.getElementById("add-experience-button");
const editExperienceButton = document.getElementById("edit-experience-button");
const deleteExperienceButton = document.getElementById(
  "delete-experience-button"
);

// To implement in the future: AJAX

// const getAllExperiences = async (hobbyId) => {
//   const experiencesContainer = document.getElementById("experiences-container");
//   const res = await fetch(`/api/experiences/hobbies/${hobbyId}`);
//   const data = await res.json();
//   const { allExperiences, userId } = data;
//   if (res.ok) {
//     allExperiences.forEach(experience => {
//       //if user id matches, include edit and delete buttons
//     });
//   }
// };

if (addExperienceButton) {

  addExperienceButton.addEventListener("click", async (event) => {
    const message = document.getElementById("experience-message-input").value;
    if (!message) return;
    try {
    const res = await fetch(`/api/experiences/hobbies/${hobbyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      }),
    });
    const data = await res.json();
    if (res.ok) {
      getAllExperiences(hobbyId);
    }
    } catch (e) {
      console.error(e.message);
    }
});
}

if (editExperienceButton) {

  editExperienceButton.addEventListener("click", async (event) => {
    const postBody = document.getElementById('user-experience');
    postBody.setAttribute('contenteditable', 'true');
    postBody.classList.add('editable-area');
    const addButton = document.getElementById('edit-experience-button');
    addButton.innerHTML = 'Save';

    const resGet = await fetch(`/api/experiences/${hobbyId}`);
    const experience = await resGet.json();

    if (resGet.ok) {
      const {
        id
      } = experience.experience
      addButton.addEventListener('click', async () => {
        const message = postBody.innerText;
        const resPost = await fetch(`/api/experiences/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message
          })
        })
        const data = await resPost.json();

        if (resPost.ok) {
          // console.log('LOOKS LIKE WE MADE IT!!!') //! for testing only
          location.reload();
        }
      })
    }
  });
}

if (deleteExperienceButton) {
  
  deleteExperienceButton.addEventListener("click", async () => {
    const res = await fetch(`/api/experiences/${hobbyId}`);
    const experience = await res.json();

    if (res.ok) {
      const {
        id
      } = experience.experience;
      const resDel = await fetch(`/api/experiences/${id}`, {
        method: 'DELETE'
      });
      await resDel.json()

      if (resDel.ok) {
        location.reload();
      }
    }
  });
}


// deleteExperienceButton.addEventListener('click', async () => {});

window.addEventListener('load', async () => {
  const res = await fetch(`/api/resources/hobbies/${hobbyId}`)
  const resources = await res.json();

  const list = document.getElementById('resources-list');

  if (resources) {
    resources.resources.forEach(resource => {
      const li = document.createElement('li');
      li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
      li.className = 'resource-link'
      list.appendChild(li);
      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'delete';
      removeBtn.className = `remove-resource ${resource.id}`
      li.appendChild(removeBtn);
    })
  }
})

const addResourceButton = document.getElementById('add-resource-button');

addResourceButton.addEventListener('click', async () => {
  const title = document.getElementById("resource-title-input").value;
  const link = document.getElementById('resource-link-input').value;

  try {
    const res = await fetch(`/api/resources/hobbies/${hobbyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        link
      }),
    });

    const resources = await res.json();

    const list = document.getElementById('resources-list');

    if (resources.resources) {
      list.innerHTML = '';
      resources.resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
        li.className = 'resource-link'
        list.appendChild(li);
        const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'delete';
      removeBtn.className = `remove-resource ${resource.id}`
      li.appendChild(removeBtn);
      })
    }

    document.getElementById('resource-title-input').value = '';
    document.getElementById('resource-link-input').value = '';

  } catch (e) {
    console.log(e.message)
  }

})
<<<<<<< Updated upstream
=======

// if(document.querySelectorAll('remove-resource')){
//   const removeBtn = document.querySelectorAll('remove-resource')

//   removeBtn.addEventListener('click', async(target) => {
//     const res = await fetch(`/api/resources/)
//   })
// }
>>>>>>> Stashed changes
