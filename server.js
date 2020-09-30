const io = require('socket.io')(8000);
const fs = require('fs');

const users = {};

let badWordsRecord = {
    'a':'badwordfiles/a.txt',
    'b':'badwordfiles/b.txt',
    'c':'badwordfiles/c.txt',
    'd':'badwordfiles/d.txt',
    'e':'badwordfiles/e.txt',
    'f':'badwordfiles/f.txt',
    'g':'badwordfiles/g.txt',
    'h':'badwordfiles/h.txt',
    'i':'badwordfiles/i.txt',
    'j':'badwordfiles/j.txt',
    'k':'badwordfiles/k.txt',
    'l':'badwordfiles/l.txt',
    'm':'badwordfiles/m.txt',
    'n':'badwordfiles/n.txt',
    'o':'badwordfiles/o.txt',
    'p':'badwordfiles/p.txt',
    'q':'badwordfiles/q.txt',
    'r':'badwordfiles/r.txt',
    's':'badwordfiles/s.txt',
    't':'badwordfiles/t.txt',
    'u':'badwordfiles/u.txt',
    'v':'badwordfiles/v.txt',
    'w':'badwordfiles/w.txt',
    'x':'badwordfiles/x.txt',
    'y':'badwordfiles/y.txt',
    'z':'badwordfiles/z.txt',
};

io.on('connection',socket =>{
    socket.on('new-user-joined',(name)=>{
        console.log("new user",name);
        users[socket.id] = name;
        socket.emit('append-active-users',users,name);
        socket.broadcast.emit('user-joined',name,users);
    });
    
    socket.on('send',message =>{
        let msg = message.split(" ");
        let foul_pos = [];
        try{
            msg.forEach((value)=>{
                // console.log(data1);
                const key = value[0].toLowerCase();
                const filePath = badWordsRecord[key];
                const data = fs.readFileSync(filePath, 'utf8');
                const words = data.split(" ");
                const pos = words.indexOf(value.toLowerCase());
                if(pos != -1){
                    foul_pos.push(msg.indexOf(value));
                }
            });
        } catch(err){
            console.error(err);
        }
        socket.broadcast.emit('recieve',{message: message, name: users[socket.id], position: foul_pos});
    });

    socket.on('disconnect',()=>{
        console.log(users[socket.id],'disconnected');
        socket.broadcast.emit('user-disconnected',users[socket.id]);
        delete users[socket.id];
    });
});