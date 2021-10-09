/* const { response } = require("express") */

const sidebox = document.querySelector("#sidebox")
document.querySelector("#link-box").addEventListener("click", (event) => {
  sidebox.classList.remove("hidden")

    if (event.target.matches("a")) {
        const id = event.target.getAttribute("id")


        switch (id) {
            case "History":
            getHistory()
             
               
                break;
            case "Preferences":
                getPreferences()
                /* sidebox.textContent = "Preferences" */
                break;
                

            default:
                break;
        }
    } else {
        return
    }
})

function getHistory(){
/* fetch('/api/vote/history2/2',{method:"GET"})
.then(response => response.json())
.then(data => { 
    console.log (data) */

       let data = [
            {
              "id": 1,
              "comment": "How come get some tacos wasn't an option!?!",
              "choice": 3,
              "user_id": 2,
              "vote_id": 1,
              "createdAt": "2021-10-07T00:49:09.000Z",
              "updatedAt": "2021-10-07T00:49:09.000Z",
              "VotesMain": {
                "id": 2,
                "question": "Which should I choose?",
                "option1": "Watch TV",
                "option2": "Hang with firends",
                "option3": "Make that sweet cash money",
                "option4": "Make a sandwich",
                "user_id": 1,
                "deadline": 100000,
                "createdAt": "2021-10-07T00:49:09.000Z",
                "updatedAt": "2021-10-07T00:49:09.000Z"
              }
            },
            {
              "id": 2,
              "comment": "No choice is really wrong though",
              "choice": 1,
              "user_id": 2,
              "vote_id": 2,
              "createdAt": "2021-10-07T00:49:09.000Z",
              "updatedAt": "2021-10-07T00:49:09.000Z",
              "VotesMain": {
                "id": 2,
                "question": "Which should I choose?",
                "option1": "Watch TV",
                "option2": "Hang with firends",
                "option3": "Make that sweet cash money",
                "option4": "Make a sandwich",
                "user_id": 1,
                "deadline": 100000,
                "createdAt": "2021-10-07T00:49:09.000Z",
                "updatedAt": "2021-10-07T00:49:09.000Z"
              }
            }
        ]

         
        sidebox.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            var question = data[i].VotesMain.question
            var choicenum = `option${data[i].choice}`
            var choice = data[i].VotesMain[choicenum]
            var questionEl = document.createElement("h2")
            var choiceEl = document.createElement("p")
            questionEl.textContent = question
            choiceEl.textContent = choice
            sidebox.appendChild(questionEl)
            sidebox.appendChild(choiceEl)
            
        }  
    }

function getPreferences(){

            let data = [
           
                { "id": 3,
                "username": "Jones45_cool",
                "email": "Jones45_cool@gmail.com",
                "password": "$2b$10$rdP/UpWlrnCv3lqt6uoLlOuyJ7r.EYJC.gPWOw8LFIjIMObseQbce",
                "preferences": "stuff"
            }
           
            ]

 
         sidebox.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            var preferences = data[i].preferences
            var preferencesEl = document.createElement("h1") 
            preferencesEl.textContent = preferences
            sidebox.appendChild(preferencesEl)
        }  
       
    
 
    /*  }) */
    }