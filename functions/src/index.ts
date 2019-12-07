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
})

// export const sendMessage = functions.https.onRequest((req, res) => {
//     const message = {
//       notification: {
//         title: req.query.title || "Test Notification",
//         body: req.query.body || "TEST"
//       },
//       topic: req.query.potato || "potato"
//     };
//     admin
//       .messaging()
//       .send(message)
//       .then(response => {
//         // Response is a message ID string.
//         console.log("Successfully sent message:", response);
//         res.send({ Succeded: true });
//       })
//       .catch(error => {
//         console.log("Error sending message:", error);
//         res.send({ Succeded: false });
//       });
//   });