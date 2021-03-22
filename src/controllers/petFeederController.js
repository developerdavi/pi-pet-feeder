const { morningCron, eveningCron } = require('../crons');
const feedPet = require('../services/feedPet');

class PetFeederController {
  /**
   * Feeds the pet
   * @param {Request} request
   * @param {Response} response
   * @returns {Response}
   */
  static async feedPet(request, response) {
    try {
      await feedPet();
      return response.sendStatus(201);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  /**
   * Changes crons active/inactive
   * @param {Request} request
   * @param {Response} response
   * @returns {Response}
   */
  static async getCrons(request, response) {
    try {
      const result = {
        morning: {
          enabled: morningCron.running || false,
          nextDate: morningCron.nextDate() || null,
          lastDate: morningCron.lastDate() || null,
        },
        evening: {
          enabled: eveningCron.running || false,
          nextDate: eveningCron.nextDate() || null,
          lastDate: eveningCron.lastDate() || null,
        },
      };

      return response.json(result);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  /**
   * Changes crons active/inactive
   * @param {Request} request
   * @param {Response} response
   * @returns {Response}
   */
  static async setupCrons(request, response) {
    try {
      const { morning, evening } = request.body;

      if (morning === true) {
        morningCron.start();
      } else {
        morningCron.stop();
      }

      if (evening === true) {
        eveningCron.start();
      } else {
        eveningCron.stop();
      }

      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

module.exports = PetFeederController;
