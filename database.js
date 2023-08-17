const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',        // Corrected spelling
    host: '165.227.171.191',    // Enclosed in quotes
    port: 5433,                 // Numeric value, no quotes
    username: 'postgres',       // Enclosed in quotes
    password: 'Unit@321!',      // Enclosed in quotes
    database: 'um',             // Enclosed in quotes
    schema: 'unittrust',
});

module.exports = sequelize;     // Export the sequelize instance
