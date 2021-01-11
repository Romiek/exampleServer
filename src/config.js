module.exports = {

    JWT_ACCESSSECRET: process.env.JWT_SECRET || 'jimploy_login1234',
    JWT_REFRESHSECRET: process.env.JWT_SECRET || 'jimploy_refresh1234',
    JWT_VERIFYSECRET: process.env.JWT_SECRET || 'jimploy_verify1234'
    
};
