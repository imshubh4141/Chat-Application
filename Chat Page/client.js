const socket = io('http://localhost:8000');

const form = document.getElementById('send-form');
const messageInput = document.getElementById('msgInp');
const messageDisplay = document.querySelector('.message-box');

form.addEventListener('submit',(e)=>{
    const sentAudio = document.getElementById('sent-tone');
    e.preventDefault();
    const message = messageInput.value;
    if(message != ''){
        append(`You: ${message}`,'right');
        sentAudio.play();
        socket.emit('send',message);
        messageInput.value = '';
    }
});

const append = (message,position)=>{
    const newMessageElement = document.createElement('div');
    newMessageElement.innerText = message;
    if(position != 'center')
        newMessageElement.classList.add('msg');
    newMessageElement.classList.add(position);
    messageDisplay.append(newMessageElement);
}

const name = prompt("enter your name");//will be username from login page
socket.emit('new-user-joined',name);

socket.on('user-joined',(name,users) =>{
    append(`${name} joined the chat`,'center');
    const userList = document.getElementById('active-users');
    const li = document.createElement('li');
    const username = document.createTextNode(name);
    li.appendChild(username);
    userList.appendChild(li);
});

socket.on('append-active-users',(users,name)=>{
    for(let key in users){
        if(users[key] != name){
            const userList = document.getElementById('active-users');
            const li = document.createElement('li');
            const username = document.createTextNode(users[key]);
            li.appendChild(username);
            userList.appendChild(li);
        }
    }
});

socket.on('recieve',data =>{
    const recieveTone = document.getElementById('recieve-tone');
    setTimeout(() => {
        recieveTone.play();
    }, 2000);
    let msg = (data.message).split(" ");
    (data.position).forEach((value)=>{
        msg[value] = '***';
    });
    data.message = msg.join(" ");
    append(`${data.name}: ${data.message}`,'left');
});

socket.on('user-disconnected',(name)=>{
    append(`${name} left the chat`,'center');
    
    const userList = document.getElementById('active-users');
    let items = userList.getElementsByTagName('li');
    for(let i = 0;i < items.length;i++){
        if(items[i].innerText === name){
            items[i].remove();
            break;
        }
    }
});
