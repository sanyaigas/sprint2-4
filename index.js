const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('social_network', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM(['male', 'female']),
        allowNull: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
}, {
    // Other model options go here
    tableName: 'users',
    timestamps: false
});

; (async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        });

        //Добавление данных
        // const user = await User.create({
        //     first_name: "Jane",
        //     last_name: "Doe",
        //     email: 'asdadasdasd@asdasd.as',
        //     password: 'aaa'
        // });
        // console.log("Jane's auto-generated ID:", user.id);

        // Выбрать информацию из БД. findOne выведет первого, fineAll массив из всех
        // const users = await User.findAll({
        //     where: {
        //         country: 'Россия'
        //     }
        // });
        // console.log(users);

        //Редактирование записей
        // const user = await User.findOne({
        //     where: {
        //         country: 'РФ'
        //     }
        // });
        // user.first_name = 'Алексей';
        // user.save();
        // console.log(user);

        //Удаление данных
        const user = await User.findByPk(2);
        user.destroy();


    } catch (error) {
        console.error(error);
    }
})();

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'social_network'
// });

// connection.query(
//     'SELECT * FROM users WHERE balance > ?',
//     [107],
//     function (err, results) {
//         console.log(results);
//     }
// );

// var post  = {title: 'Hello MySQL', body: 'текст в body', author_id: 1};
// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
//   if (error) throw error;
// });