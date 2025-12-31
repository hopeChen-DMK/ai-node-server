const { sequelize } = require('../config/database');
const User = require('./User');

// 定义模型之间的关联关系（如果需要）
// 例如: User.hasMany(Comment, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User
};