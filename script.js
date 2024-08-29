async function fetchListData() {
  const url = await fetch('https://jsonplaceholder.typicode.com/todos');
  const res = await response.json();
  
}