const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const corsModule = require('cors');
admin.initializeApp();

const { messaging } = admin;
const cors = corsModule({ origin: true });

// Cloud Function to send a push notification with an HTTP trigger
exports.sendApprovalNotification = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { deviceToken, title, matter } = req.body;

      const payload = {
        notification: {
          title: title,
          body: matter,
          sound: 'default',
        },
      };

      const response = await messaging().sendToDevice(deviceToken, payload);

      console.log('Notification sent successfully:', response);

      res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
      console.error('Error sending notification:', error);

      res.status(500).json({ error: 'Error sending notification' });
    }
  });
});
