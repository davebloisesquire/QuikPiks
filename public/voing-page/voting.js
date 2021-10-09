var currentVoteId;
const voteArea = document.getElementById('voting-area');
const submitBallot = document.getElementById('voting-form');

const getVote = () => fetch('/api/vote/open-vote', {
  method: 'GET',
})
.then((res) => res.json())
.then((data) => data);


const renderVotingArea = (vote) => {
  currentVoteId = vote.id;
  //Renders the vote question
  const votingQuestion = `<h1>${vote.question}</h1>`
  //Renders the vote options
  const option1 = `<label class="container">${vote.option1}
    <input type="radio" name="option1" id="option1">
    <span class="checkmark"></span>
  </label>`

  const option2 = `<label class="container">${vote.option2}
    <input type="radio" name="option2" id="option2">
    <span class="checkmark"></span>
  </label>`

  const option3 = `<label class="container">${vote.option3}
    <input type="radio" name="option3" id="option3">
    <span class="checkmark"></span>
  </label>`

  const option4 = `<label class="container">${vote.option4}
    <input type="radio" name="option4" id="option4">
    <span class="checkmark"></span>
  </label>`


  // Combines the vote question and options unless they're null in which case it won't render them
  const votingArea = `${votingQuestion}${option1}${option2}${vote.option3 ? option3 : '' }${vote.option4 ? option4 : ''}`

  voteArea.innerHTML = votingArea;
}
// Pulls new vote data and displays it
getVote().then((response) => response.forEach( item => renderVotingArea(item) ))

// VOTE SUBMISSION
// POST request for new voting
const submitVote = (ballot) => {
  fetch('/api/vote/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(ballot),
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

// Pulls the choice data from the page
function getChoice() {
  if(document.getElementById('option1').checked) {
    return 1;
  } else if (document.getElementById('option2').checked) {
    return 2;
  } else if (document.getElementById('option3').checked) {
    return 3;
  } else if (document.getElementById('option4').checked) {
    return 4;
  }
}


submitBallot.addEventListener('submit', (e) => {
  e.preventDefault();

  const newBallot = {
    comment: "",
    choice: getChoice(),
    user_id: 1,
    vote_id: currentVoteId,
  }

  // Makes the actual POST with ballot info
  submitVote(newBallot)
})
