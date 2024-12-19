// create a reference to the model
let businesslistModel = require('../models/businesslist.model');

// === CREATE === //
module.exports.displayAddPage = (req, res, next) => {

    let newItem = businesslistModel();

    res.render('businesslist/add_edit', {
        title: 'Add a new contact',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = businesslistModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    businesslistModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/businesslist/list');
        }
    });
}


// === READ === //
module.exports.businesslistList = function(req, res, next) {  
    businesslistModel.find((err, businesslistList) => {
        //console.log(businesslistList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businesslist/list', {
                title: 'businesslist List', 
                businesslistList: businesslistList,
                userName: req.user ? req.user.username : ''
            })            
        }
    }).sort({"name":1});
}

// === UPDATE === //
module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    businesslistModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businesslist/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedItem = businesslistModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    businesslistModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/businesslist/list');
        }
    });
}

// === DELETE === //
module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;

    businesslistModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/businesslist/list');
        }
    });
}
