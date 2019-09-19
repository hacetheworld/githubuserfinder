// INIT
const github = new Github();

const ui = new UI();
// Search Input
const searchInput = document.getElementById('searchUser');

//Search input event listners

searchInput.addEventListener('keyup', (e) => {
    // Get input Text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText).then(data => {
            if (data.profile.message == 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

        });




    } else {
        // clear profile
        ui.clearProfile();
    }
})