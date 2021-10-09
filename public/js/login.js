//-----------LOGIN-----------
const login = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#name").value.trim();
    const password = document.querySelector("#passW").value.trim();

    
  
    if (username && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
          alert("You are logged in")
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#loginBtn')
    .addEventListener('click', login);
  
//-----------CREATE ACCOUNT-----------
const createAcc = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#newEmail").value.trim();
    const username = document.querySelector("#newName").value.trim();
    const password = document.querySelector("#newPassW").value.trim();

    if (email && username && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ email, username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            alert("it works")
          document.location.replace('/home');
        } else {
          alert('Failed to create an account');
        }
      }
};

document
    .querySelector('#signupBtn')
    .addEventListener('click', createAcc)