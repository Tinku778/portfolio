// netlify/functions/contactFormHandler.js
const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const contactFormDB = firebase.database().ref("contactForm");

exports.handler = async function (event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, email, message } = JSON.parse(event.body);

    try {
        const newEntry = contactFormDB.push();
        await newEntry.set({ name, email, mssg: message });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data saved successfully" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to save data" }),
        };
    }
};
