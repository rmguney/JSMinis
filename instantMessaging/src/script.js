function showApp() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app-screen').classList.remove('hidden');
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const channelContent = document.getElementById('channel-content');
        const messageElement = document.createElement('div');
        messageElement.classList.add('mb-4');
        messageElement.innerHTML = `
            <p class="font-semibold text-pink-400">You <span class="text-gray-400 text-sm">Now</span><span class="text-xs text-gray-500 ml-2">Seen by 1</span></p>
            <p class="text-white">${message}</p>
        `;
        channelContent.appendChild(messageElement);
        messageInput.value = '';
        channelContent.scrollTop = channelContent.scrollHeight;
    }
}

function showChannel(channelName) {
    document.getElementById('channel-name').innerText = channelName;

    let channelContent = document.getElementById('channel-content');
    if (channelName === '# Main') {
        channelContent.innerHTML = `
            <div class="mb-4">
                <p class="font-semibold text-pink-400">Leyla Aydın <span class="text-gray-400 text-sm">2:50 PM</span><span class="text-xs text-gray-500 ml-2">Seen by 4</span></p>
                <p class="text-white">Here’s the image from the last presentation:</p>
                <img src="https://via.placeholder.com/150" alt="Sample Image" class="mt-2 rounded-md">
            </div>
            <div class="mb-4">
                <p class="font-semibold text-pink-400">Elif Demir <span class="text-gray-400 text-sm">2:35 PM</span><span class="text-xs text-gray-500 ml-2">Seen by 5</span></p>
                <p class="text-white">Thanks Leyla! I'll add it to the documentation.</p>
            </div>
            <div class="mb-4">
                <p class="font-semibold text-pink-400">Murat Kaya <span class="text-gray-400 text-sm">3:00 PM</span><span class="text-xs text-gray-500 ml-2">Seen by 2</span></p>
                <p class="text-white">Please change the background music of our next presentation to this:</p>
                <audio controls class="mt-2 w-full">
                    <source src="" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `;
    } else {
        channelContent.innerHTML = `<p class="text-white">You are now in ${channelName}. Start the discussion here!</p>`;
    }
}

function showPrivateChat(userName) {
    document.getElementById('channel-name').innerText = `Private Chat - ${userName}`;
    let channelContent = document.getElementById('channel-content');
    channelContent.innerHTML = `<p class="text-white">This is a private chat with ${userName}. Say hello!</p>`;
}

function openPrivateChatModal() {
    document.getElementById('private-chat-modal').classList.remove('hidden');
}

function startPrivateChat() {
    const userName = document.getElementById('private-chat-user').value;
    if (userName.trim() !== '') {
        const chatList = document.getElementById('private-chat-list');
        const newChat = document.createElement('li');
        newChat.innerHTML = `<a href="#" class="text-pink-400 font-semibold hover:underline" onclick="showPrivateChat('${userName}')">o ${userName}</a>`;
        chatList.appendChild(newChat);
        closeModal('private-chat-modal');
    }
}

function showTaskModal() {
    document.getElementById('task-modal').classList.remove('hidden');
}

function createTask() {
    closeModal('task-modal');
}

function editTaskModal() {
    document.getElementById('edit-task-modal').classList.remove('hidden');
}

function saveTaskEdit() {
    closeModal('edit-task-modal');
}

function showPollModal() {
    document.getElementById('poll-modal').classList.remove('hidden');
}

function createPoll() {
    closeModal('poll-modal');
}

function addPollOption() {
    const pollOptions = document.getElementById('poll-options');
    const newOption = document.createElement('input');
    newOption.type = "text";
    newOption.className = "w-full p-2 bg-gray-700 rounded-md mb-4 text-white";
    newOption.placeholder = `Option ${pollOptions.children.length + 1}`;
    pollOptions.appendChild(newOption);
}

function showManageUsersModal() {
    document.getElementById('manage-users-modal').classList.remove('hidden');
}

function saveUserManagement() {
    closeModal('manage-users-modal');
}

function showChannelCreationModal() {
    document.getElementById('channel-creation-modal').classList.remove('hidden');
}

function createChannel() {
    closeModal('channel-creation-modal');
}

function showSendLinkModal() {
    document.getElementById('invite-modal').classList.remove('hidden');
}

function generateInviteLink() {
    document.getElementById('invite-link').value = 'https://generated-link.com/invite';
}

function copyInviteLink() {
    const inviteLink = document.getElementById('invite-link');
    inviteLink.select();
    document.execCommand("copy");
}

function sendInvite() {
    closeModal('invite-modal');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}