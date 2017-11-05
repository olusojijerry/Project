var mongoose = require('mongoose');
var Resource = mongoose.model('Resource');
var promisify =require('es6-promisify');

exports.homepage = function(req, res) {
    res.render('index')
}

exports.aboutPage = function(req, res) {
    res.render('About')
}

exports.loginPage = function(req, res) {
    res.render('login')
}

exports.registrationPage = function(req, res) {
    res.render('registration')
}

exports.viewStudentsPage = function(req, res) {
    res.render('viewStudents')
}

exports.createStudentResource = function(req, res) {
    res.render('createStudentResource')
}

exports.showPage = function(req, res) {
    res.render('show')
}

exports.getResources = async (req, res) => {
    const Resy = await Resource.find();
    console.log(Resy);
    res.render('viewstudents', {Resy: Resy }); 
};

/*exports.list_all_resource = function(req, res){
//Resource.find({}, function(err, resource){
  //      if(err)
 //           res.send(err);
   //     res.render("viewStudents", resource);
        console.log(resource);
    });
};*/

/*exports.passwordValidate = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false,
        yahoo_remove_subaddress: false
    });
    req.checkBody('password1', 'Password cannot be blank!').notEmpty();
    req.checkBody('password2', 'Confirm Password cannot be blank!').notEmpty();
    req.checkBody('password2', 'Oops! Your password do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if (errors){
        req.flash('error', errors.map(err => err.msg));
        res.render('registration', {body: req.body, flashes: req.flash()});
    }
};*/

exports.create_a_resource = function(req, res){
    var new_resource = new Resource(req.body);
    new_resource.save(function(err, resource){
        if(err)
           res.send(err);
        res.json(resource);
    });
};

exports.update_a_resource = function(req, res){
    Resource.findOneAndUpdate({_id: req.params.resourceId}, req.body, {new: true}, function(err, resource){
        if(err)
            res.send(err);
        res.json(resource);
    });
};

exports.delete_a_resource = (req, res) => {
    Resource.Remove({
        _id: req.params.resourceId
    }, function(err, resource){
        if (err)
            res.send(err);
        res.json({message: 'Resource successfully Deleted'});
    });
};