import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const sendTopic = functions.https.onCall((data, context) => {
    const message = {
        notification: {
          title: data.title || "Test Notification",
          body: data.body || "TEST"
        },
        topic: data.potato || "potato"
      };
      admin
        .messaging()
        .send(message)
        .then(response => {
          // Response is a message ID string.
          console.log("Successfully sent message:", response);
        })
        .catch(error => {
          console.log("Error sending message:", error);
        });
});