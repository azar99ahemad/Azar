const items = document.querySelectorAll('.item');
const dropContainer = document.getElementById('dropContainer');
const resetBtn = document.getElementById('resetBtn');

let draggedItem = null;

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('dragenter', dragEnter);
dropContainer.addEventListener('dragleave', dragLeave);
dropContainer.addEventListener('drop', drop);

resetBtn.addEventListener('click', resetContainers);

function dragStart(event) {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  draggedItem = null;
  showMessage('Item dropped successfully!');
}

function resetContainers() {
  dropContainer.innerHTML = '';
  items.forEach(item => {
    item.classList.remove('dragging');
    item.classList.remove('hovered');
    document.querySelector('.drag-container').appendChild(item);
  });
  showMessage('Containers reset!');
}

function showMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.innerText = message;
    document.body.appendChild(messageContainer);
    setTimeout(() => {
      document.body.removeChild(messageContainer);
    }, 3000);
  }
