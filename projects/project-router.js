const express = require("express");

const Projects = require("./project-model.js");

const validateProjectId = require("../middleware/validateProjectId.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      let convertedProjects = projects.map(project => {
        if (project.task_completed) {
          return { ...project, task_completed: true };
        } else {
          return { ...project, task_completed: false };
        }
      });
      res.json(convertedProjects);
    })
    .catch(err => {
      res.status(500).json({ message: "Unsuccessful retrieval of projects." });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add project." });
    });
});

router.get("/:id/tasks", validateProjectId, (req, res) => {
  Projects.getTasks(req.params.id)
    .then(tasks => {
      let convertedTasks = tasks.map(task => {
        if (task.task_completed) {
          return { ...task, task_completed: true };
        } else {
          return { ...task, task_completed: false };
        }
      });
      res.json(convertedTasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Unsuccessful retrieval of projects." });
    });
});

router.post("/:id/tasks", validateProjectId, (req, res) => {
  Projects.addTask(req.body, req.params.id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add task." });
    });
});

router.get("/:id/resources", validateProjectId, (req, res) => {
  Projects.getResources(req.params.id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Unsuccessful retrieval of resources." });
    });
});

router.post("/:id/resources", validateProjectId, (req, res) => {
  Projects.addResource(req.body, req.params.id)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add resource" });
    });
});

module.exports = router;