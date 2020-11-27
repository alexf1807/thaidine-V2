var mongoose = require("mongoose");

var recipeSchema = new mongoose.Schema({
    name: String,
    namethai: String,
    type: String,
    description: String,
    spicy: Number,
    image: String,
    imageId: String,
    recactive: String,
    preptime: Number,
    servesqty: Number,
    servesqtyunit: String,
    likes:  [{
                id: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
    }],
    dislikes:[
            {type: mongoose.Schema.Types.ObjectId,
            ref: "Dislike"     }
        ],
    ingredients:[],
    instructions:[],
    tips:[],
    comments: [
            {type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"     }
        ]
    });

module.exports = mongoose.model("Recipe", recipeSchema);