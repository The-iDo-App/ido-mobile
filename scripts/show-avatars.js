fetch('http://localhost:5000/api/avatars').then(res => res.json())
    .then(res => {
        let avatarURL
        console.log(res);
        const avatarGallery = document.getElementById('avatar-gallery');
        for (var i = 0; i < res.avatars.length; i++) {
            avatarURL = res.avatars[i].picture;
            // console.log(avatarURL);
            avatarGallery.innerHTML +=
                `
                    <a href="#" class="link-gallery">
                        <img src="${avatarURL}" class="img-thumbnail photo-gallery" name="pic" style="object-fit: contain;">
                    </a>
                `;

        }
    }).then(data => {
        let avatar;
        let save = document.getElementById('saveBtn');
        save.addEventListener('click', function() {
            document.getElementById('profilePic').setAttribute('src', avatar);
        });

        let avatars = document.getElementsByName('pic');
        [...avatars].map(e => {
            e.addEventListener('click', function() {
                avatar = e.src;
                console.log(avatar);
            })
        })
    });