const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Number: ${body.phoneNumber}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'byanymeansdigital@gmail.com',
    from: 'byanymeansdigital@gmail.com',
    subject: 'Inquiry Request',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });

  console.log('success');
};
