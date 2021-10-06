
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
                sidebox.textContent = "Preferences"
                break;
            case "Vote":
                sidebox.textContent = "Vote"
                break;
            case "Comment":
                sidebox.textContent = "Comment"
                break;
            default:
                break;
        }
    } else {
        return
    }
})

function getHistory(){
    fetch('/api/votes/')
}