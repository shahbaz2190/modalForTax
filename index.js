

// Create the modal element
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content">
    <iframe src="https://lead.debitura.com/"></iframe>
  </div>
`;

// Set the CSS styles for the modal
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '500px';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
// Center the modal using CSS
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';

// Set the CSS styles for the modal content
const modalContent = modal.querySelector('.modal-content');

modalContent.style.position = 'relative';
modalContent.style.backgroundColor = '#fefefe';
modalContent.style.margin = 'auto';
modalContent.style.padding = '20px';
modalContent.style.border = '1px solid #888';
modalContent.style.width = '80%';
modalContent.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)';
modalContent.style.webkitAnimationName = 'animatetop';
modalContent.style.webkitAnimationDuration = '0.4s';
modalContent.style.animationName = 'animatetop';
modalContent.style.animationDuration = '0.4s';

// Set the CSS styles for the iframe element
const iframe = modal.querySelector('iframe');
iframe.style.width = '100%';
iframe.style.height = '500px';
iframe.style.border = 'none';

// Add the modal to the document
document.getElementById("add_modal").appendChild(modal);

// Create the method that opens the modal
window.OpenMyModal = () => {
  modal.style.display = 'block';
}

// Add an event listener to close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
const button = document.getElementById('open-modal-button');

// button.addEventListener('click', () => {
  // Open the modal
//   modal.style.display = 'block';

  // Apply the button styles
  button.style.backgroundColor = 'blue';
  button.style.color = 'white';
  button.style.padding = '10px 20px';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
// });

