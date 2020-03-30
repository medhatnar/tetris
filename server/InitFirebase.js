var firebaseConfig = {
				apiKey: config.firebase_key,
				authDomain: `${config.projectId}.firebaseapp.com`,
				databaseURL: `https://${config.projectId}.firebaseio.com`,
				projectId: config.projectId,
				storageBucket: `${config.projectId}.appspot.com`,
				messagingSenderId: config.msgSendId,
				appId: config.appId,
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();
