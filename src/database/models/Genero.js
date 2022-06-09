module.exports = (sequelize, DataTypes) => {

    const Genero = sequelize.define("Genero", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }, 
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        active: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }

    }, 
    {
        tableName: "genres"
        });
    return Genero
}

