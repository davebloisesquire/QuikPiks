const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    console.log(req.session.loggedIn)
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  