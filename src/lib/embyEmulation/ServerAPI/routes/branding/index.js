export default (server, embyEmulation) => {
    server.get('/branding/configuration', async (req, res, next) => {
        res.send({
            LoginDisclaimer: 'This is an Oblecto Media server',
            CustomCss: ''
        });

        next();
    });
};
