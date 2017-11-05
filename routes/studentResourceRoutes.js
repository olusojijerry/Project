/*module.exports = function(router){
    var resource = require('../controller/studentResourceController');
    
    
    router.get('/resource', resource.list_all_resource);
    router.post('/resource', resource.create_a_resource);

    router.get('/resource/:resourceId', resource.read_a_resource)
    router.put('/resource/:resourceId', resource.update_a_resource)
    router.delete('/resource/:resourceId', resource.delete_a_resource);
};*/
 var express = require('express');
 var router = express.Router();
 var resource = require('../controller/studentResourceController');
 var userStudentController = require('../controller/createResourceController');

 router.get('/', resource.homepage);
 router.get('/About', resource.aboutPage);
 router.get('/login', resource.loginPage);
 router.get('/registration', resource.registrationPage);
 //router.post('/registration', resource.passwordValidate);
 //router.post('/registration', resource.registrationPage)
 router.get('/viewStudents', resource.getResources);
 router.get('/createStudentResource', resource.createStudentResource);
 router.get('/show', resource.showPage);
 //router.get('/viewStudents', resource.list_all_resource)
 router.get('/createStudentResource', userStudentController.createStudentResource);

 router.get('/viewStudents', resource.getResources);
//router.get('/resource', resource.list_all_resource);
router.post('/resource', resource.create_a_resource);

//router.get('/resource/:resourceId', resource.read_a_resource);
router.put('/resource/:resourceId', resource.update_a_resource);
router.delete('/resource/:resourceId', resource.delete_a_resource);

module.exports = router;
