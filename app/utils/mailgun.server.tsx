interface SendMailOptions {
    to: string;
    from: string;
    subject: string;
    text: string;
}

export const sendMail = async ({
                                   to,
                                   from,
                                   subject,
                                   text,
                               }: SendMailOptions) => {
    const auth = `${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`;
    const body = new URLSearchParams({
        to,
        from,
        subject,
        text,
    });

    return fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
        method: 'post',
        body,
        headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};