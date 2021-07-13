if (document.getElementById('form1') != null) {
    var form = document.getElementById('form1');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        isValid = form.checkValidity();
        form.reportValidity();
        console.log(isValid);
        if (isValid) {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var username = document.getElementById('username').value;
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('username', username);
            location.href = './step-2.html'
        }
    });
}

if (document.getElementById('form2') != null) {
    var form = document.getElementById('form2');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        isValid = form.checkValidity();
        form.reportValidity();
        console.log(isValid);
        if (isValid) {
            var birthday = document.getElementById('birthday').value;
            localStorage.setItem('birthday', birthday);
            location.href = './step-3.html';
        }
    });
}

if (document.getElementById('form3') != null) {
    var form = document.getElementById('form3');
    var item = document.getElementsByName('sex');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        var checked;
        for (var i = 0; i < item.length; i++) {
            if (item[i].attributes[2].value == 'true')
                checked = true;
        }
        isValid = true;
        if (!checked && form.checkValidity())
            isValid = false;
        form.reportValidity();

        if (isValid) {
            var sex;
            for (var i = 0; i < item.length; i++) {
                if (item[i].attributes[2].value == 'true')
                    sex = item[i].innerText;
            }
            localStorage.setItem('sex', sex);
            location.href = './step-4.html';
        } else {
            alert('Select at least one');
        }
    });
}

if (document.getElementById('form4') != null) {
    var form = document.getElementById('form4');
    var item = document.getElementsByName('orientation');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        var checked;
        for (var i = 0; i < item.length; i++) {
            if (item[i].attributes[2].value == 'true')
                checked = true;
        }
        isValid = true;
        if (!checked && form.checkValidity())
            isValid = false;
        form.reportValidity();

        if (isValid) {
            var orientation;
            for (var i = 0; i < item.length; i++) {
                if (item[i].attributes[2].value == 'true')
                    orientation = item[i].innerText;
            }
            localStorage.setItem('orientation', orientation);
            location.href = './step-5.html';
        } else {
            alert('Select at least one');
        }
    });

}

function getAddress() {
    var reverseGeocoder = new BDCReverseGeocode();
    reverseGeocoder.getClientLocation((result) => {
        const postalCode = result.localityInfo.informative[9].name;
        const city = result.localityInfo.administrative[4].name;
        const province = result.localityInfo.administrative[3].name;
        const country = result.localityInfo.administrative[0].name;
        const latitude = result.latitude;
        const longitude = result.longitude;
        var fullAddress = `${postalCode},${city},${province},${country},${latitude},${longitude}`;
        var fullAddress1 = `${postalCode} ${city}, ${province}, ${country}, ${latitude}, ${longitude}`; //Formatted
        //Change input box text 
        const addressBar = document.getElementById('addressBar');
        addressBar.focus();
        addressBar.select();
        addressBar.value = fullAddress1;

        localStorage.setItem('address', fullAddress);
    });
    reverseGeocoder.localityLanguage = 'en';

}
if (document.getElementById('form5') != null) {
    var form = document.getElementById('form5');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        isValid = form.checkValidity();
        form.reportValidity();
        if (isValid) {
            location.href = './step-6.html'
        }
    });
}


if (document.getElementById('form6') != null) {
    var form = document.getElementById('form6');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        isValid = form.checkValidity();
        console.log(isValid);
        form.reportValidity();
        if (isValid) {
            var employment;
            var item = document.getElementsByName('employment');
            for (var i = 0; i < item.length; i++) {
                if (item[i].attributes[2].value == 'true')
                    employment = item[i].innerText;
            }
            localStorage.setItem('employment', employment);
            location.href = './preferences.html'
        }
    });
}

function savePreference() {
    var but = document.getElementById('pref');
    but.addEventListener("click", (e) => {
        e.preventDefault();
        var genderPref;
        var item = document.getElementsByName('genderPref');
        for (var i = 0; i < item.length; i++) {
            if (item[i].attributes[2].value == 'true')
                genderPref = item[i].innerText;
        }
        var minAge = document.getElementById('minAge').value;
        var maxAge = document.getElementById('maxAge').value;
        var minDistance = document.getElementById('minDistance').value;
        var maxDistance = document.getElementById('maxDistance').value;

        localStorage.setItem('genderPref', genderPref);
        localStorage.setItem('minAge', minAge);
        localStorage.setItem('maxAge', maxAge);
        localStorage.setItem('minDistance', minDistance);
        localStorage.setItem('maxDistance', maxDistance);

        location.href = './preferences-1.html'
    });
}

function savePreference1() {
    var but = document.getElementById('pref1');
    but.addEventListener("click", (e) => {
        e.preventDefault();
        var astrologicalSign;
        var item = document.getElementsByName('astrologicalSign');
        for (var i = 0; i < item.length; i++) {
            if (item[i].attributes[2].value == 'true')
                astrologicalSign = item[i].innerText.trim();
        }

        var religion;
        var item1 = document.getElementsByName('religion');
        for (var i = 0; i < item1.length; i++) {
            if (item1[i].attributes[2].value == 'true')
                religion = item1[i].innerText.trim();
        }

        var politicalView;
        var item2 = document.getElementsByName('politicalView');
        for (var i = 0; i < item2.length; i++) {
            if (item2[i].attributes[2].value == 'true')
                politicalView = item2[i].innerText.trim();
        }
        console.log(politicalView);

        var smoke;
        var item4 = document.getElementsByName('smoke');
        for (var i = 0; i < item4.length; i++) {
            if (item4[i].attributes[2].value == 'true')
                smoke = item4[i].innerText.trim();
        }

        var wantKids;
        var item5 = document.getElementsByName('wantKids');
        for (var i = 0; i < item5.length; i++) {
            if (item5[i].attributes[2].value == 'true')
                wantKids = item5[i].innerText.trim();
        }

        var wantMarried;
        var item6 = document.getElementsByName('wantMarried');
        for (var i = 0; i < item6.length; i++) {
            if (item6[i].attributes[2].value == 'true')
                wantMarried = item6[i].innerText.trim();
        }

        localStorage.setItem('astrologicalSign', astrologicalSign);
        localStorage.setItem('politicalView', politicalView);
        localStorage.setItem('religion', religion);
        localStorage.setItem('smoke', smoke);
        localStorage.setItem('wantKids', wantKids);
        localStorage.setItem('wantMarried', wantMarried);

        location.href = './preferences-2.html';
    });
}

function savePreference2() {
    var but = document.getElementById('pref2');
    but.addEventListener("click", (e) => {
        e.preventDefault();
        var sports = "";
        var item = document.getElementsByName('sports');
        for (var i = 0; i < item.length; i++) {
            if (item[i].attributes[2].value == 'true')
                sports += item[i].firstElementChild.innerText + ",";
        }

        var hobbies = "";
        var item2 = document.getElementsByName('hobbies');
        for (var i = 0; i < item2.length; i++) {
            if (item2[i].attributes[2].value == 'true')
                hobbies += item2[i].firstElementChild.innerText + ",";
        }

        var musicGenre = "";
        var item3 = document.getElementsByName('musicGenre');
        for (var i = 0; i < item3.length; i++) {
            if (item3[i].attributes[2].value == 'true')
                musicGenre += item3[i].firstElementChild.innerText + ",";
        }

        var movieGenre = "";
        var item4 = document.getElementsByName('movieGenre');
        for (var i = 0; i < item4.length; i++) {
            if (item4[i].attributes[2].value == 'true')
                movieGenre += item4[i].firstElementChild.innerText + ",";
        }

        var pets = "";
        var item5 = document.getElementsByName('pets');
        for (var i = 0; i < item5.length; i++) {
            if (item5[i].attributes[2].value == 'true')
                pets += item5[i].firstElementChild.innerText + ",";
        }

        var books = "";
        var item6 = document.getElementsByName('books');
        for (var i = 0; i < item6.length; i++) {
            if (item6[i].attributes[2].value == 'true')
                books += item6[i].firstElementChild.innerText + ",";
        }

        var food = "";
        var item7 = document.getElementsByName('food');
        for (var i = 0; i < item7.length; i++) {
            if (item7[i].attributes[2].value == 'true')
                food += item7[i].firstElementChild.innerText + ",";
        }

        var drinks = "";
        var item8 = document.getElementsByName('drinks');
        for (var i = 0; i < item8.length; i++) {
            if (item8[i].attributes[2].value == 'true' || item8[i].ariaChecked == 'true')
                drinks += item8[i].firstElementChild.innerText + ",";
        }

        localStorage.setItem('sports', sports);
        localStorage.setItem('hobbies', hobbies);
        localStorage.setItem('musicGenre', musicGenre);
        localStorage.setItem('movieGenre', movieGenre);
        localStorage.setItem('pets', pets);
        localStorage.setItem('books', books);
        localStorage.setItem('food', food);
        localStorage.setItem('drinks', drinks);

        saveToDb();
        location.href = './questions.html';
    });

}

function saveQuestions() {
    const questions = document.getElementsByName('questions');
    console.log(questions);
    // for (var i = 0; i < questions.length; i++) {
    //     if (questions[i].className == 'question') {
    //         console.log(questions[i].innerText)
    //     }
    // }
    location.href = '../suggestions.html';
}

async function saveToDb() {
    //USER
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const username = localStorage.getItem('username');
    const birthday = localStorage.getItem('birthday');
    const sex = localStorage.getItem('sex');
    const orientation = localStorage.getItem('orientation');
    const address = localStorage.getItem('address');
    const employment = localStorage.getItem('employment');

    //INTEREST
    const genderPref = localStorage.getItem('genderPref');
    const minAge = localStorage.getItem('minAge');
    const maxAge = localStorage.getItem('maxAge');
    const minDistance = localStorage.getItem('minDistance');
    const maxDistance = localStorage.getItem('maxDistance');
    const astrologicalSign = localStorage.getItem('astrologicalSign');
    const politicalView = localStorage.getItem('politicalView');
    const religion = localStorage.getItem('religion');
    const smoke = localStorage.getItem('smoke');
    const wantKids = localStorage.getItem('wantKids');
    const wantMarried = localStorage.getItem('wantMarried');
    const sports = localStorage.getItem('sports');
    const hobbies = localStorage.getItem('hobbies');
    const musicGenre = localStorage.getItem('musicGenre');
    const movieGenre = localStorage.getItem('movieGenre');
    const pets = localStorage.getItem('pets');
    const books = localStorage.getItem('books');
    const food = localStorage.getItem('food');
    const drinks = localStorage.getItem('drinks');

    const response = await fetch('http://localhost:5000/api/registers/createAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            //user
            firstName,
            lastName,
            username,
            birthday,
            sex,
            orientation,
            address,
            employment,

            //interest
            genderPref,
            minAge,
            maxAge,
            minDistance,
            maxDistance,
            astrologicalSign,
            politicalView,
            religion,
            smoke,
            wantKids,
            wantMarried,
            sports,
            hobbies,
            musicGenre,
            movieGenre,
            pets,
            books,
            food,
            drinks,
        })
    });
    const data = await response.json();
    const access_token = data.access_token;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user_id', data.user_id);
    console.log(data);
    return data;
}