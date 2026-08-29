const form = document.querySelector('#project-search');
const input = document.querySelector('#project');
const toast = document.querySelector('.toast');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const project = input.value.trim();
  toast.textContent = project ? `Looking into ${project}…` : 'Enter a project or locality to begin.';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
});
document.querySelectorAll('.suggestions button').forEach((button) => button.addEventListener('click', () => {
  input.value = button.textContent.replace(' ↗', '');
  input.focus();
}));
