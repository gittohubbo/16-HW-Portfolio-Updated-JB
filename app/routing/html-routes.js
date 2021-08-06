var express = require('express');
var router = express.Router();

// Require json to project details
var data = require('../../data.json');
// var homeProjects = data.homeProjects;
var projects = data.projects;

// Root defaults to Index/Landing Page
router.get('/', function (req, res) {

  var handleObj = {
    title: 'Home',
    content: 'I am an Information Technology Professional with a focus in networking arquitecture.'
  }
  res.render('index', handleObj)
});

// Main-Projects/Portfolio Page
router.get('/projects', function (req, res) {
  //pull in data from data.json about project and render in the handlebar Obj

  var handleObj = {
    title: 'Projects & Apps',
    content: 'A few applications',
    active_projects: true,
    projects: projects
  };

  res.render('all-projects', handleObj);
});

// About Page
router.get('/about', function (req, res) {
  var handleObj = {
    title: 'About',
    content: 'I am Jorge, an Information Technology Professional with a focus in networking arquitecture',
    active_about: true
  };
  res.render('about', handleObj);
});

// Contact Page
router.get('/contact', function (req, res) {
  var handleObj = {
    title: 'Contact',
    content: 'Feel free to send me an email.',
    active_contact: true
  };
  res.render('contact', handleObj);
});

// Resume Page
router.get('/resume', function (req, res) {
  var handleObj = {
    title: 'Resume',
    content: 'My resume is currently being updated.',
    active_resume: true
  };
  res.render('resume', handleObj);
});

router.get("/projects/:name", function (req, res) {
  // console.log(req.params.name);

  for (var i = 0; i < projects.length; i++) {
    if (projects[i].title === req.params.name) {

      var handleObj = {
        title: projects[i].title,
        content: projects[i].longDesc,
        demo: projects[i].demo,
        github: projects[i].github,
        image: projects[i].image
      };

      return res.render('single-project', handleObj);
    }
  }
});

module.exports = router;
