module.exports = (sequelize, DataTypes) => {

    const Pelicula = sequelize.define("Pelicula", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
         
        },
        updated_at: {
            type: DataTypes.DATE,
            
        }, 
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        } 
         

    }, 
    {
        tableName: "movies",
        timestamps: true,
        underscored: true
    });
    return Pelicula
}

