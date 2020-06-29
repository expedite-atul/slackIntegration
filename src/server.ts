import App from "./app";
import { WebClient } from "@slack/web-api";

let server = App.instance.listen(3000);

server.on('listening', function () {
    console.log(`Server started listening on port 3000`);
});


// due to less bandwith it is auto called here
const token = 'xoxp-111111111-111111111-111111111-111111111'
const web = new WebClient(token);
const emailId = 'expediteatul@gmail.com';

(async () => {
    try {
        console.log(`running iifee`);
        // Post a message to the channel, and await the result.
        // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
        const userProfile: any = await web.users.lookupByEmail({
            email: emailId
        });
        console.log(userProfile);
        if (userProfile?.user?.id) {
            const userId = userProfile.user.id;
            const sendBookingMessage: any = await web.chat.postMessage({
                text: 'hey man welcome!You just rock it.',
                channel: userId,
                username: 'Bot'
            });
            console.log(sendBookingMessage);
        }
        // The result contains an identifier for the message, `ts`.
    } catch (error) {
        console.error(error)
    }
})();