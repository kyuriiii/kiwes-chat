module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "room",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      master: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      notice: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      participants: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "[]",
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "room",
    }
  );
};
