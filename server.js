const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log(`express is running on 3000`);
});

app.get('/sse', (req, res) => {

    res
        .setHeader("Access-Control-Allow-Origin", "*")
        .setHeader("Content-Type", "text/event-stream")
        .setHeader("Connection", "keep-alive")
        .setHeader("Cache-Control", "no-cache")

    setInterval(() => {
        res
            .status(200)
            .write(
                `data: message : ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n\n`
            );
    }, 1000);

});
