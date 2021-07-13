var googleUser = {};

var startApp = function() {
    gapi.load('auth2', function() {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: '740301413940-qkcmcsfrjjfrtva0fld85ondk4r9poat.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });
        var e = attachSignin(document.getElementById('customBtn'));
        // console.log(e);
    });
};

function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            var gmail = googleUser.getBasicProfile().getEmail();
            console.log(gmail)
            onSignIn(gmail);
        },
        function(error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
}

async function onSignIn(gmail) {
    var response = await fetch(`http://localhost:5000/api/logins/gmail/${gmail}`, {
        method: 'GET',
    });
    var data = await response.json();


    console.log(data);
    if (data.success == 'true') {
        const access_token = data.access_token;
        const user_id = data.user_id;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_id', user_id);
        // console.log("signed in");
        location.href = './messaging/inbox.html'
    } else {
        location.href = './registration/step-1.html'
        console.log("User not registered");
    }
}
