module.exports = {
    getProjects: function () {
        return [
            {
                "id": 1,
                "name": "Refactor Main Web App",
                "isActive": false
            },
            {
                "id": 2,
                "name": "The LOTRY App",
                "isActive": false
            },
            {
                "id": 3,
                "name": "Time Tracker",
                "isActive": true
            },
            {
                "id": 4,
                "name": "Payroll Runner",
                "isActive": true
            },
            {
                "id": 5,
                "name": "Kodiak",
                "isActive": false
            },
            {
                "id": 6,
                "name": "Project Blue Book",
                "isActive": false
            },
            {
                "id": 7,
                "name": "X Lab",
                "isActive": true
            },
            {
                "id": 8,
                "name": "Manhattan Project",
                "isActive": true
            }
        ];
    }
};


var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();


router.get('/projects', function(req, res, next) {
  const result = projects.sort((a,b) => a.id -b.id)
     res.status(200).send(result)
  if ( result.length === 0) res.status(200).send([])
});

router.get('/projects/:id', function(req, res, next) {
    const id = req.params.id
    const result = projects.filter(e => {
      return e.id === req.id
    })
    if(result.length === 0) res.status(404).send({"message": 'No Project Found'});
    res.status(200).send(result).sort((a,b) => a.id - b.id)
});

router.get('/projects/active', function(req, res, next) {
  const result = projects.filter(e => {
    return e.isActive === true
  }).sort((a,b) => a.id - b.id)
  if(result.length === 0) res.status(404).send([]);
  res.status(200).send(result)
});

module.exports = router;

