const addVote = document.getElementById('new-vote-form');

const addNewVote = (voteInfo) => {
  fetch('/api/vote/new', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(voteInfo),
})
  .then((res) => res.json())
  .then((data) => {
    console.log('Successful POST request:', data);
    return data;
  })
  .then(() => location.reload())
  .catch((error) => {
    console.error('Error in POST request:', error);
  });
}

addVote.addEventListener('submit', (e) => {
  e.preventDefault();

  const question = document.getElementById('question').value;
  const option1 = document.getElementById('option1').value;
  const option2 = document.getElementById('option2').value;
  const option3 = document.getElementById('option3').value;
  const option4 = document.getElementById('option4').value;


  const newVote = {
    question: question,
  	option1: option1,
  	option2: option2,
    option3: option3 ? option3 : null,
    option4: option4 ? option4 : null,
  	user_id: 1
  }
  console.log(newVote);

  addNewVote(newVote);
})
