var mongoose = require("mongoose");

var dislikeSchema = new mongoose.Schema({
    dateofdislike: Date,
    author: {
            id: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
    }
});

module.exports = mongoose.model("Dislike", dislikeSchema);