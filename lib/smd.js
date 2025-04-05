const { default: makeWASocket } = require('@adiwajshing/baileys');
const { delay } = require('@adiwajshing/baileys/lib/Utils');

const init = async () => {
    const sock = makeWASocket({
        // options
    });

    sock.ev.on('messages.upsert', async (message) => {
        const msg = message.messages[0];
        if (!msg.message) return;

        // Notify the user to wait before sending the next message
        await sock.sendMessage(msg.key.remoteJid, { text: 'Please wait a moment before sending another message to avoid being banned.' });

        // Add a delay to simulate waiting period
        await delay(5000); // Wait for 5 seconds before processing the next message

        // Process the message
        // Your existing message processing code here
    });
    
    return sock;
};

module.exports = { init };
