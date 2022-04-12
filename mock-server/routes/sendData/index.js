const express = require('express');
const bodyParser = require('body-parser');
const circularJSON = require('circular-json');

const router = express.Router({ mergeParams: true });
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        let json = circularJSON.stringify({ ...req.body, modalText: 'Данные получены' });
        res.send(json);
    } catch (e) {
        res.send({ error: e.message });
    }
});

module.exports = { sendDataRouter: router };
