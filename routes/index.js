const express    = require("express"),
      router     = express.Router(),
      Recipe = require("../models/recipe"),
      Register = require("../models/register")


      
router.get("/getRecipes", function(req, res){
  Recipe.find({recactive: 'yes'}, function(err, recipes){
    if(err){
        res.status(500).send({message: 'Ooops, something went wrong! Please refresh the page'})
    } else {
        res.send(recipes);
    }
  });
})


router.get('/*',  function(req, res){
    res.render("index", {recipeSelected: null});
})


router.post("/newRegister", (req, res) => {
  let newRegister = new Register({
                            email: req.body[0]
                        });
      Register.create(newRegister, function(err, result){
        if(err){
            return res.send({error: "Sorry, something went wrong.. :(", err: err});
        } else {
            return res.send({success: "Thanks for registering!"});
        }
    });
});

 

module.exports = router;