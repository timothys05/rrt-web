const twilio = require('twilio');

const MESSAGE_BODY =
  'Your report has been received. Visit tl237rrt.com, call us at 833-778-4435, ' +
  'or download the app on the App Store (https://apps.apple.com/us/app/rapid-response-team/id6451216856) ' +
  'or Google Play (https://play.google.com/store/apps/details?id=com.younglawgroup.accidentreporting).';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { phone } = req.body || {};
  if (!phone) {
    return res.status(400).json({ error: 'Missing phone field' });
  }

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    await client.messages.create({
      body: MESSAGE_BODY,
      from: process.env.TWILIO_FROM_PHONE,
      to: phone,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
