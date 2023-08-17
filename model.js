// const { DataTypes } = require('sequelize'); // Corrected spelling
// const sequelize = require('./database'); // Correct relative path

// const User = sequelize.define('um_users', {
//     username: {
//         type: DataTypes.STRING, // Corrected spelling and capitalization
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING, // Corrected spelling and capitalization
//         allowNull: false,
//         unique: true,
//     },
// });

// module.exports = User;


const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('um_group_members', {
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // Other columns if any...
    createdAt: { // Use camel case
        field: 'created_at', // Specify the actual column name in the database
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: { // Use camel case
        field: 'updated_at', // Specify the actual column name in the database
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = User;
