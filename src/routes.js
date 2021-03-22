const { Router } = require('express');
const PetFeederController = require('./controllers/petFeederController');

const router = Router();

router.get('/ping', (req, res) => res.json({ feeder: 'pong' }));

router.post('/feed', PetFeederController.feedPet);
router.get('/cron', PetFeederController.getCrons);
router.put('/cron', PetFeederController.setupCrons);

module.exports = router;
