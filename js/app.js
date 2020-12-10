// Setup the same format day like as data table
const setupFormattedDate = () => {
  const currentTime = new Date();

  const day = currentTime.getDay();
  const month = currentTime.toLocaleString('EN', { month: 'long' });
  const year = currentTime.getFullYear();

  return `${month} ${day} ${year}`;
};

const templateOfNewPost = (index, title, category) => {
  const template = document.createElement('tr');

  template.innerHTML = `
    <td>${index}</td>
    <td>${category}</td>
    <td>${title}</td>
    <td>${setupFormattedDate()}</td>
    <td>
      <a href="details.html" class="btn btn-secondary">
        <i class="fas fa-angle-double-right"></i> Details
      </a>
    </td>
  `;

  return template;
}

document.getElementById('addPost').addEventListener('click', () => {
  const title = document.getElementById('postTitle').value;
  const category = document.getElementById('postCategory');

  const selectedCategory = category.querySelectorAll('option')[category.selectedIndex].textContent;

  const tableData = document.querySelector('#posts table tbody');
  const indexOfNewElement = tableData.querySelectorAll('tr').length + 1;

  tableData.appendChild(templateOfNewPost(indexOfNewElement, title, selectedCategory));

  // clear input title data
  document.getElementById('postTitle').value = '';
});