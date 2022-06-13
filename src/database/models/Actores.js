module.exports = (sequelize, DataTypes) => {

    const Actor = sequelize.define("Actor", {
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
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1)
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER,
        }

    }, 
    {
        tableName: "actors",
        timestamps: true,
        underscored: true
        });
    return Actor
}

