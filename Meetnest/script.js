let posts = [];
let friends = [];
let friendRequests = [];
let currentUser = null;
let currentChatFriend = null;

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('posts')) {
        posts = JSON.parse(localStorage.getItem('posts'));
        displayPosts();
    }

    if (localStorage.getItem('friends')) {
        friends = JSON.parse(localStorage.getItem('friends'));
    }

    if (localStorage.getItem('friendRequests')) {
        friendRequests = JSON.parse(localStorage.getItem('friendRequests'));
    }

    if (localStorage.getItem('currentUser')) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
        document.querySelector('.profile-container').style.display = 'none';
    }

    displayFriendRequests();
});

function createProfile() {
    const profileName = document.getElementById('profileName').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    if (profileName && profilePicture) {
        const reader = new File