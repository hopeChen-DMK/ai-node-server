const { Sequelize } = require('sequelize');
require('dotenv').config();

// 创建 Sequelize 实例连接到 SQLite 数据库
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // SQLite 数据库文件路径
  logging: console.log, // 在开发环境中显示 SQL 查询
});

// 测试数据库连接
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite database connection has been established successfully.');
    
    // 同步所有模型到数据库
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };