const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint untuk menerima webhook
app.post('/webhook', (req, res) => {
    const message = req.body.message;
    console.log("Pesan diterima:", message);

    // Contoh balasan
    res.send({
        reply: `Halo! Kamu mengirim: ${message.text}`
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
