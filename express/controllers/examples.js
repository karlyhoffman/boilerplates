var express = require('express');
var router = express.Router();
var exampleModel = require('../models/Example');
var bodyParser = require('body-parser');


// RESTful API

//get all
router.get('/', function(req, res, next) {
  exampleModel.find(function(error, users) {
    if (error) return error;
    res.json(users);
  });
});

//get by id
router.get('/:id', function(req, res, next) {
  exampleModel.findById(req.params.id, function(error, user) {
    if (error) return error;
    res.json(user);
  });
});

//create
router.post('/', function(req, res, next) {
  exampleModel.create(req.body, function(error, user) {
    if (error) return error;
    res.json(user);
  });
});

// update by id
router.put('/:id', function(req, res, next) {
  exampleModel.findByIdAndUpdate(req.params.id, req.body, function(error, job) {
  // Update to Model Params
    // job.submitDate = req.body.submitDate;
    // job.jobTitle = req.body.jobTitle;
    // job.company = req.body.company;
    // job.jobDescLink = req.body.jobDescLink;
    // job.interviewerNameAndTitle = req.body.interviewerNameAndTitle;
    // job.interviewerContact = req.body.interviewerContact;
    // job.interviewerNotes = req.body.interviewerNotes;
    // job.followUpEmail = req.body.followUpEmail;
    if (error) return error;
    res.json(job);
  })
});
router.patch('/:id', function(req, res, next) {
  exampleModel.findByIdAndUpdate(req.params.id, req.body, function(error, job) {
   // Update to Model Params
    // job.submitDate = req.body.submitDate;
    // job.jobTitle = req.body.jobTitle;
    // job.company = req.body.company;
    // job.jobDescLink = req.body.jobDescLink;
    // job.interviewerNameAndTitle = req.body.interviewerNameAndTitle;
    // job.interviewerContact = req.body.interviewerContact;
    // job.interviewerNotes = req.body.interviewerNotes;
    // job.followUpEmail = req.body.followUpEmail;
    if (error) return error;
    res.json(job);
  })
});

//delete by id
router.delete('/:id', function(req, res, next) {
  exampleModel.findByIdAndRemove(req.params.id, req.body, function(error, user) {
    if (error) return error;
    res.json({
      "message": "User with the name of " + user.name + " has been removed"
    });
  });
});

module.exports = router;