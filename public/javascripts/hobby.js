const hobbyId = document.querySelector(".title-description").id;
let userHobby;
// Select dropdown
window.addEventListener('load', async () => {
  // on load, populate selectContainer with dropdown if user is logged in
  const selectContainer = document.querySelector(".select-container");
  const res = await fetch(`/api/userHobbies/${hobbyId}`)
  const data = await res.json();

  if (res.ok) {
    const user = data.user;
    userHobby = data.userHobby;

    if (user) {
      const selectDiv = document.createElement('div');
      selectDiv.classList.add('select-div');
      selectContainer.appendChild(selectDiv);
      if (userHobby) {
        // if userHobby exists, display correct wheelhouse status
        const text = document.querySelector('.text');
        text.innerHTML = `${userHobby.Wheelhouse.status}`
        // selectContainer.prepend(text);

        // find wheelhouses that userHobby is not attached to
        const wheelhouse = user.Wheelhouses.filter(wh => {
          return wh.id !== userHobby.wheelhouseId;
        });

        createDropdown(wheelhouse, 'Update Status');
        // Delete from Wheelhouse button
        // const removeButton = document.createElement('button');
        // removeButton.setAttribute('id', 'delete-from-wheelhouse');
        // removeButton.innerHTML = 'Remove from Wheelhouse';
        // selectDiv.appendChild(removeButton);
      } else {
        createDropdown(user.Wheelhouses, 'Add to Wheelhouse');
      }
    }
  }

  function createDropdown(wheelhouses, buttonText) {
    const selectDiv = document.querySelector('.select-div');
    const selectDropdown = document.createElement('select');
    selectDropdown.setAttribute('name', 'status');
    selectDropdown.setAttribute('id', 'select-status');
    selectDiv.appendChild(selectDropdown);

    wheelhouses.forEach(status => {
      const option = document.createElement('option');
      option.setAttribute('value', status.id);
      option.innerHTML = status.status;
      selectDropdown.appendChild(option);
    });

    const statusButton = document.createElement('button');
    statusButton.innerText = buttonText;
    statusButton.classList.add('status-button');
    statusButton.setAttribute('id', 'add-to-wheelhouse-button');
    selectDiv.appendChild(statusButton);
  }


  const addToWheelhouseBtn = document.getElementById("add-to-wheelhouse-button");
  const deleteFromWheelhouseBtn = document.getElementById("delete-from-wheelhouse");
  const selectStatus = document.getElementById("select-status");

if (addToWheelhouseBtn) {
  addToWheelhouseBtn.addEventListener("click", async () => {
    const wheelhouseId = selectStatus.value;

    const res = await fetch(`/api/wheelhouse/${wheelhouseId}/hobby/${hobbyId}`, {
      method: "POST",
    });
    console.log('AFTER POST', res.ok)
    const userHobby = await res.json();
    console.log('======> userHobby frontend', userHobby)

    if (res.ok && userHobby.userHobby) {
      const text = document.querySelector('.text');
      text.innerHTML = userHobby.userHobby.Wheelhouse.status
      addToWheelhouseBtn.classList.add("checked");
      addToWheelhouseBtn.innerText = "Added!";
    }
  });
}

// Delete from Wheelhouse
// if (deleteFromWheelhouseBtn) {
//   deleteFromWheelhouseBtn.addEventListener('click', async () => {
//     const res = await fetch(`/api/userHobbies/${userHobby.id}`, {
//       method: 'DELETE'
//     });
    // const data = await res.json();
    // if (res.ok) {
    // }
  // });
// }


});


const addExperienceButton = document.getElementById("add-experience-button");
const editExperienceButton = document.getElementById("edit-experience-button");
const deleteExperienceButton = document.getElementById(
  "delete-experience-button"
);


// To implement in the future: AJAX for Experiences

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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<RESOURCES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('load', async () => {
  const res = await fetch(`/api/resources/hobbies/${hobbyId}`)

  const list = document.getElementById('resources-list');
  const resources = await res.json();

  if (res.ok && resources.resources) {
      resources.resources.forEach(resource => {
      const li = document.createElement('li');
      li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
      li.className = 'resource-link'
      li.id = `${resource.id}`
      list.appendChild(li);
      const btnDiv = document.createElement('div')
      btnDiv.className = 'btn-div'
      li.appendChild(btnDiv);
      const editBtn = document.createElement('button');
      editBtn.innerHTML = 'edit';
      editBtn.id = `${resource.id}`
      editBtn.className = `edit-resource`
      btnDiv.appendChild(editBtn);
      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'delete';
      removeBtn.id = `${resource.id}`
      removeBtn.className = `remove-resource`
      btnDiv.appendChild(removeBtn);
    })
  }
})

const addResourceButton = document.getElementById('add-resource-button');

if (addResourceButton) {

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
      const label = document.createElement('label');
      label.innerHTML = 'Your Resources:'
      label.className='resource-label'
      list.appendChild(label);
      resources.resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
        li.className = 'resource-link'
        li.id = `${resource.id}`
        list.appendChild(li);
        const btnDiv = document.createElement('div')
        btnDiv.className = 'btn-div'
        li.appendChild(btnDiv);
        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'edit';
        editBtn.id = `${resource.id}`
        editBtn.className = `edit-resource`
        btnDiv.appendChild(editBtn);
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'delete';
        removeBtn.id = `${resource.id}`
        removeBtn.className = `remove-resource`
        btnDiv.appendChild(removeBtn);
      })
    }

    document.getElementById('resource-title-input').value = '';
    document.getElementById('resource-link-input').value = '';

    } catch (e) {
      console.log(e.message)
    }

  })
}

  document.addEventListener('click', async (e) => {
    if(e.target && e.target.className == 'remove-resource'){
      const answer = window.confirm('Do you want to delete this resource?')
      if(answer){
        const res = await fetch(`/api/resources/${e.target.id}`, {
          method: 'DELETE'
        });
        const resources = await res.json();
        if (resources.ok) {
          const res = await fetch(`/api/resources/hobbies/${hobbyId}`)

          const list = document.getElementById('resources-list');
          list.innerHTML = '';
          const label = document.createElement('label');
          label.innerHTML = 'Your Resources:'
          label.className='resource-label'
          list.appendChild(label);
          const resources = await res.json();

          if (res.ok && resources.resources) {
              resources.resources.forEach(resource => {
                const li = document.createElement('li');
                li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
                li.className = 'resource-link'
                li.id = `${resource.id}`
                list.appendChild(li);
                const btnDiv = document.createElement('div')
                btnDiv.className = 'btn-div'
                li.appendChild(btnDiv);
                const editBtn = document.createElement('button');
                editBtn.innerHTML = 'edit';
                editBtn.id = `${resource.id}`
                editBtn.className = `edit-resource`
                btnDiv.appendChild(editBtn);
                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = 'delete';
                removeBtn.id = `${resource.id}`
                removeBtn.className = `remove-resource`
                btnDiv.appendChild(removeBtn);
            })
          }
        }
      }
    }
  })

  document.addEventListener('click', async (e) => {
    if(e.target && e.target.className == 'edit-resource'){
      let link = document.getElementById(`${e.target.id}`)
      const title = link.innerHTML.split('<a href=')[1].split('>')[1].split('<')[0];
      link.innerHTML = '';
      const form = document.createElement('form');
      form.id = `edit-resource__form`
      link.appendChild(form);
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'resource-title-input';
      input.id = `${e.target.id}`
      input.value = title;
      // input.autofocus = true;
      form.appendChild(input);
      const btnDiv = document.createElement('div')
      btnDiv.className = 'btn-div'
      link.appendChild(btnDiv);
      const submitBtn = document.createElement('button');
      submitBtn.innerHTML = 'edit';
      submitBtn.id = `${e.target.id}`
      submitBtn.className = `submit-edit`
      submitBtn.type = 'submit'
      btnDiv.appendChild(submitBtn);
      const cancelBtn = document.createElement('button');
      cancelBtn.innerHTML = 'cancel';
      cancelBtn.className = `cancel-edit`
      btnDiv.appendChild(cancelBtn);
    }
  })

  let inputValue = '';

  document.addEventListener('input', async (e) => {
    if(e.target && e.target.className == 'resource-title-input'){
      inputValue = e.target.value;
    }
  })

  document.addEventListener('click', async (e) => {
    if(e.target && e.target.className == 'submit-edit'){
      e.preventDefault();
      const res = await fetch(`/api/resources/${e.target.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: inputValue
        })
      });
      const isOk = await res.json();
      if (isOk.ok) {
        const res = await fetch(`/api/resources/hobbies/${hobbyId}`)

        const list = document.getElementById('resources-list');
        list.innerHTML = '';
        const label = document.createElement('label');
        label.innerHTML = 'Your Resources:'
        label.className='resource-label'
        list.appendChild(label);
        const resources = await res.json();

        if (res.ok && resources.resources) {
          resources.resources.forEach(resource => {
            const li = document.createElement('li');
            li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
            li.className = 'resource-link'
            li.id = `${resource.id}`
            list.appendChild(li);
            const btnDiv = document.createElement('div')
            btnDiv.className = 'btn-div'
            li.appendChild(btnDiv);
            const editBtn = document.createElement('button');
            editBtn.innerHTML = 'edit';
            editBtn.id = `${resource.id}`
            editBtn.className = `edit-resource`
            btnDiv.appendChild(editBtn);
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = 'delete';
            removeBtn.id = `${resource.id}`
            removeBtn.className = `remove-resource`
            btnDiv.appendChild(removeBtn);
          })
        }
      }
    }
  })

  document.addEventListener('click', async (e) => {
    if(e.target && e.target.className == 'cancel-edit'){
      const res = await fetch(`/api/resources/hobbies/${hobbyId}`)

      const list = document.getElementById('resources-list');
      list.innerHTML = '';
      const label = document.createElement('label');
      label.innerHTML = 'Your Resources:'
      label.className='resource-label'
      list.appendChild(label);
      const resources = await res.json();

      if (res.ok && resources.resources) {
          resources.resources.forEach(resource => {
          const li = document.createElement('li');
          li.innerHTML = `<a href=${resource.link}>${resource.title}</a>`
          li.className = 'resource-link'
          li.id = `${resource.id}`
          list.appendChild(li);
          const btnDiv = document.createElement('div')
          btnDiv.className = 'btn-div'
          li.appendChild(btnDiv);
          const editBtn = document.createElement('button');
          editBtn.innerHTML = 'edit';
          editBtn.id = `${resource.id}`
          editBtn.className = `edit-resource`
          btnDiv.appendChild(editBtn);
          const removeBtn = document.createElement('button');
          removeBtn.innerHTML = 'delete';
          removeBtn.id = `${resource.id}`
          removeBtn.className = `remove-resource`
          btnDiv.appendChild(removeBtn);
        })
      }
    }
  })
