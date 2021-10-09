const voteArea = document.getElementById('votesArea');

const getVotes = () => fetch('/api/vote/votes/1', {
    method: 'GET',
  })
  .then((res) => res.json())
  .then((data) => data)

function voteTally(count1, count2, count3, count4, vote) {
  if (count1 > count2 && count1 > count3 && count1 > count4) { return vote.option1 }
  else if (count2 > count1 && count2 > count3 && count2 > count4) { return vote.option2 }
  else if (count3 > count2 && count3 > count1 && count3 > count4) { return vote.option3 }
  else if (count4 > count2 && count4 > count3 && count4 > count1) { return vote.option4 }
  else { return "It's a tie!"}
}

function renderMyVotes(votes) {
  const allVotes = []
  votes.forEach(vote => {
    // count all votes
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    vote.VotesTransactions.forEach(voteTran => {
      switch (voteTran.choice) {
          case 1:
            count1++;
            break;
          case 2:
            count2++;
            break;
          case 3:
            count3++;
            break;
          case 4:
            count4++;
            break;
      }
    });

    //question
    const question = `${vote.question}`
    //results
    const results = `${ voteTally(count1, count2, count3, count4, vote) }`
    //option1
    const option1 = `<div>${vote.option1} got <b>${count1}</b> votes</div>`
    //option2
    const option2 = `<div>${vote.option2} got <b>${count2}</b> votes</div>`
    //option3
    const option3 = `<div>${vote.option3} got <b>${count3}</b> votes</div>`
    //option4
    const option4 = `<div>${vote.option4} got <b>${count4}</b> votes</div>`
    //comments

    const renderedVote = `<h2>${question}</h2><h3>Winner: ${results}</h3>${option1}${option2}${vote.option3 ? option3 : ''}${vote.option4 ? option4 : ''}`
    //console.log(renderedVote);
    allvotes = allVotes.push(renderedVote);
  })
  var votesRender = ''
  for (var i = 0; i < allVotes.length; i++) {
    votesRender = votesRender + allVotes[i]
  }
  voteArea.innerHTML = votesRender;

}

getVotes().then((response) => renderMyVotes(response))
