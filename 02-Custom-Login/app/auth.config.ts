interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: '{CLIENT_ID}',
    domain: '{DOMAIN}',
    // You may need to change this!
    callbackURL: 'http://localhost:3000/'
};
