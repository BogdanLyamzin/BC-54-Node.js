const ElasticEmail = require('@elasticemail/elasticemail-client');
require("dotenv").config();

const {ELASTICEMAIL_API_KEY, EMAIL_FROM} = process.env;
 
const defaultClient = ElasticEmail.ApiClient.instance;
 
const {apikey} = defaultClient.authentications;
apikey.apiKey = ELASTICEMAIL_API_KEY;
 
const api = new ElasticEmail.EmailsApi();
 
const email = ElasticEmail.EmailMessageData.constructFromObject({
  Recipients: [
    new ElasticEmail.EmailRecipient("pifaw61968@tenjb.com")
  ],
  Content: {
    Body: [
      ElasticEmail.BodyPart.constructFromObject({
        ContentType: "HTML",
        Content: "<p><strong>Test</strong> email</p>"
      })
    ],
    Subject: "bogdan.lyamzin.d@gmail.com",
    From: EMAIL_FROM
  }
});
 
const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
    console.log('API called successfully.');
  }
};

api.emailsPost(email, callback);
