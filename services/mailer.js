const sendgrid = require("@sendgrid/mail");
const keys = require("../config/keys");
const msg = {};

class Mailer {
  constructor({ subject, recipients }, content) {
    sendgrid.setApiKey(keys.sendGridKey);
    const emails = recipients.map((email) => {
      return { email: email.email };
    });

    this.msg = {
      personalizations: [
        {
          to: emails,
        },
      ],
      from: {
        email: "no-reply-andydev@hotmail.com",
        name: "Emaily no reply",
      },
      subject,
      content: [
        {
          type: "text/html",
          value: content,
        },
      ],
      trackingSettings: {
        clickTracking: {
          enable: true,
          enableText: true,
        },
        openTracking: {
          enable: true,
          
        },
        subscriptionTracking: {
          enable: true,
        },
      },
    };
  }
  async send() {
    try {
      return await sendgrid.send(this.msg);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
   
  }
}
// const sendgrid = require('@sendgrid/mail');
// const helper = require('@sendgrid/helpers');
// sendgrid.setApiKey(process.env.SEND_GRID_KEY);

// class Mailer extends helper{
//     constructor({ subject, recipients }, content){
//         super();

//         this.sdApi = helper(process.env.SEND_GRID_KEY)
//         this.from_email = new helper.Email('no-reply@emaily.com');
//         this.subject = subject;
//         this.body = new helper.Content('text/html',content);
//         this.recipients = this.formatAddresses(recipients);
//         this.addContent(this.body);

//         this.addClickTracking();
//         this.addRecipients();
//     }

//     formatAddresses(recipients) {
//         return recipients.map(({email})=>{
//             return new helper.Email(email);
//         });
//     }

//     addClickTracking() {
//         const trackingSettings = new helper.TrackingSettings();
//         const clickTracking = new helper.ClickTracking(true,true);

//         trackingSettings.setClickTracking(clickTracking);
//         this.addClickTracking(trackingSettings);
//     }

//     addRecipients(){
//         const personalize = new helper.Personalization();
//         this.recipients.forEach(recipient=>{
//             personalize.addTo(recipient);
//         });
//         this.addRecipients(personalize);
//     }
//     async send(){
//         const request = this.sgApi.emptyRequest({
//             method:'POST',
//             path:'/v3/mail/send',
//             body: this.toJSON()
//         })
//         const response = await this.sgApi.API(request);
//         return response;
//     }
// }

module.exports = Mailer;
