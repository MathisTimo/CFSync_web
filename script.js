isSigned = false;

function onSignIn(googleUser) {
    isSigned = true;
    var profile = googleUser.getBasicProfile();
    userId = profile.getId(); // Do not send to your backend! Use an ID token instead.
    userName = profile.getName();
    userPP = profile.getImageUrl();
    userEmail = profile.getEmail();
    window.location.pathname = '/index'
}

