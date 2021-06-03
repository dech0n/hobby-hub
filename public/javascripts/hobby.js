const addToWheelhouseBtn = document.getElementById("add-to-wheelhouse-button");
const selectStatus = document.getElementById("select-status");
const hobbyId = document.querySelector('.title-description');

addToWheelhouseBtn.addEventListener("click", async () => {
  const wheelhouseId = selectStatus.value;

  const res = await fetch(`/api/wheelhouse/${wheelhouseId}/hobby/${hobbyId.id}`, { method: 'POST' })

  if (res.ok) {
    addToWheelhouseBtn.classList.add('checked');
  }
});
