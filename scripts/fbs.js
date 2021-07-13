window.fbAsyncInit = function() {
    FB.init({
        appId: '1219083558589164',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v11.0' // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) { // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
    });
};

function log() {
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', function(response) {
                var fbId = response.id;
                onSuccessFB(fbId);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}

async function onSuccessFB(id) {
    console.log(id);
    var fbId = id;
    var response = await fetch(`http://localhost:5000/api/logins/facebook/${fbId}`, {
        method: 'GET',
    });
    var data = await response.json();
    console.log(data);
    if (data.success == 'true') {
        const access_token = data.access_token;
        const user_id = data.user_id;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_id', user_id);
        location.href = './messaging/inbox.html'
    } else {
        location.href = './registration/step-1.html'
            // console.log("User not registered");
    }

}