// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
// This isn't really an audio fact file about bears, but it is an audio file that you can transcribe
const audio = document.getElementById('audioSource');
          const captions = [
            { start: 0, end: 1, text: "This isn't" },
            { start: 1, end: 2, text: "This isn't really an" },
            { start: 2, end: 3, text: "This isn't really an audio fact" },
            { start: 3, end: 4, text: "This isn't really an audio fact file about" },
            { start: 4, end: 5, text: "This isn't really an audio fact file about bears" },
            { start: 5, end: 6, text: "This isn't really an audio fact file about bears, but it is an audio file" },
            { start: 6, end: 7, text: "This isn't really an audio fact file about bears, but it is an audio file that you can transcribe" }
          ];
        
          const captionBox = document.getElementById('captionBox');
        
          audio.ontimeupdate = () => {
            const currentTime = audio.currentTime;
            const currentCaption = captions.find(cap => currentTime >= cap.start && currentTime <= cap.end);
            captionBox.textContent = currentCaption ? currentCaption.text : '';
          };

toggle.addEventListener('click', toggleComments);
toggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleComments();
  }
});

function toggleComments() {
  const wrapper = document.querySelector('.comment-wrapper');
  const isVisible = wrapper.style.display === 'block';
  wrapper.style.display = isVisible ? 'none' : 'block';
  toggle.setAttribute('aria-pressed', !isVisible);
}
