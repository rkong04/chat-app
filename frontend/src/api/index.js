var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
    console.log("Attemping Connection");

    socket.onopen = () => {
        console.log("Successful Connection")
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("Socket Closed: ", event);
    };
};

let sendMsg = msg => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export {connect, sendMsg};