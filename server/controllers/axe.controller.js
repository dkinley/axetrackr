const Axe = require ('../models/axe.model')

module.exports = {

    getAll: (req, res) => {  // the getAll is the key, the value is the entire anonymous object
        Axe.find() //this is going to use the model connection to the db
                        // 'find' returns an array by default 
            .then((allAxeInstruments) => {
                console.log(allAxeInstruments);
                res.json(allAxeInstruments); // this is the return from the route
            })
            .catch((err) => {
                console.log("error happened in the getAll");
                console.log(err);
                res.status(400).json(err);
            });

    },    create: (req, res) => {  
        console.log(req.body); //whenever creating, it's good to console log
        Axe.create(req.body) // no {} as it is already an object, the req (request) is already an object
            .then((newAxeInstruments) => {  //this is new 
                console.log(newAxeInstruments);
                res.json(newAxeInstruments);
            })
            .catch((err) => {
                console.log("error happened in the Create");
                console.log(err);
                res.json(err);
            });
    },

    details: (req, res) => {  //need ID to bring one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Axe.findById(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((oneAxeInstrument) => {  //this is getting one
                console.log(oneAxeInstrument);
                res.json(oneAxeInstrument);
            })
            .catch((err) => {
                console.log("error happened in the details controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

    edit: (req, res) => {  //mongodb requires two pieces 1)query, i.e. what to find, 2) 
        console.log(req.params.id);
        console.log(req.body);

        Axe.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }) // no {} as it is already an object, the req (request) is already an object
            .then((updatedAxeInstruments) => {  //this is new 
                console.log(updatedAxeInstruments);
                res.json(updatedAxeInstruments);
            })
            .catch((err) => {
                console.log("error happened in the edit controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

    delete: (req, res) => {  //need ID to delete one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Axe.findByIdAndDelete(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((deletedAxeInstrument) => {  //this is getting one
                console.log(deletedAxeInstrument);
                res.json(deletedAxeInstrument);
            })
            .catch((err) => {
                console.log("error happened in the delete controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

}