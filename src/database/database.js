import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    '132465',
    {
        host: 'localhost',
        port: 53122,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 3000,
            idle: 1000,
        },
        loggin: false,
    }
)
