const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const corsModule = require('cors');
admin.initializeApp();



const cors = corsModule({ origin: true });


// Cloud Function to send a push notification with an HTTP trigger
exports.sendApprovalNotification = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { deviceToken, title, matter } = req.body;
      const messaging = admin.messaging();

      if(!messaging)
      {
        console.error("Admin SDK Not set up correctly");
        return;
      }

      const payload = {
        notification: {
          title: title,
          body: matter,
        },
        android: {
          notification: {
              sound: 'default',  // Plays the default notification sound on Android
          },
      },
      apns: {
          payload: {
              aps: {
                  sound: 'default',  // Plays the default notification sound on iOS
              },
          },
      },
        token : deviceToken
      };

      
      const response = await messaging.send(payload);

      console.log('Notification sent successfully:', response);

      res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
      console.error('Error sending notification:', error);

      res.status(500).json({ error: 'Error sending notification'});
    }
  });
});
