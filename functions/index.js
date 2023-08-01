/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
 
 // Create and deploy your first functions
 // https://firebase.google.com/docs/functions/get-started
 
 // exports.helloWorld = onRequest((request, response) => {
 //   logger.info("Hello logs!", {structuredData: true});
 //   response.send("Hello from Firebase!");
 // });
 
 /**
  * Import function triggers from their respective submodules:
  *
  * const {onCall} = require("firebase-functions/v2/https");
  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
  *
  * See a full list of supported triggers at https://firebase.google.com/docs/functions
  */
 
  //const {onRequest} = require("firebase-functions/v2/https");
  const logger = require("firebase-functions/logger");
  
  // Create and deploy your first functions
  // https://firebase.google.com/docs/functions/get-started
  
  // exports.helloWorld = onRequest((request, response) => {
  //   logger.info("Hello logs!", {structuredData: true});
  //   response.send("Hello from Firebase!");
  // });
  
  const functions = require('firebase-functions');
  const admin = require('firebase-admin');
  admin.initializeApp();
  
  const { messaging } = admin;
  
  // Cloud Function to send a push notification with an HTTP trigger
  exports.sendApprovalNotification = functions.https.onRequest(async (req, res) => {
    try {
      // Extract the device token from the request body
      const { deviceToken } = req.body;
      const { title } = req.title;
      const { matter } = req.matter;
  
      // Set the notification payload with sound
      const payload = {
        notification: {
          title: title,
          body: matter,
          sound: 'default', // You can specify a custom sound file here if needed
        },
      };
  
      // Send the notification to the specified device token
      const response = await messaging().sendToDevice(deviceToken, payload);
  
      // Handle the response if needed
      console.log('Notification sent successfully:', response);
  
      // Respond with success message
      res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
      console.error('Error sending notification:', error);
  
      // Respond with error message
      res.status(500).json({ error: 'Error sending notification' });
    }
  });
  
 