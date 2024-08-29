const list = [];

async function fetchListData() {
  const url = await fetch('https://jsonplaceholder.typicode.com/todos');
  const res = await url.json();
  for(const data of res) {
    list.push(data);
  }
  displayList();
}

function displayList() {
  const ul = document.getElementById('list');
  for(const item of list) {
    const li = document.createElement('li');
    li.textContent = `${item.userId} - ${item.title}`;
    li.classList.add('list-group-item');
    ul.appendChild(li);
  }
}

function displayListById(id) {
  const notes = list.filter(note => note.userId === id);
  const ul = document.getElementById('list');
  ul.innerHTML = ''; //reset the element
  for(const item of notes) {
    const li = document.createElement('li');
    li.textContent = `${item.userId} - ${item.title}`;
    li.classList.add('list-group-item');
    ul.appendChild(li);
  }
}

fetchListData();
window.displayListById = displayListById;