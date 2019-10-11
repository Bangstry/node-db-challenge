const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask,
};

function getProjects() {
  return db("projects");
}

function getTasks(project_id) {
  return db("projects as pro")
    .where("pro.id", project_id)
    .join("tasks as tsk", "pro.id", "tsk.project_id")
    .select(
      "pro.name as Project Name",
      "pro.description as Project Description",
      "tsk.description as task",
      "tsk.notes as task notes",
      "tsk.is_complete",
    );
}

function getResources(project_id) {
  return db("projects as pro")
    .where("pro.id", project_id)
    .join("project_resource as prosrc", "pro.id", "prosrc.project_id")
    .join("resources as src", "prosrc.resource_id", "src.id")
    .select(
      "pro.name as Project Name",
      "pro.description as Project Description",
      "src.name as Resource Name",
      "src.description as Resource Description",
    );
}

function addProject(projectData) {
  return db("projects").insert(projectData);
}

function addTask(taskData, project_id) {
  return db("tasks").insert({ ...taskData, project_id: project_id });
}

function addResource(resourceData, project_id) {
  return db("resources")
    .insert(resourceData)
    .then(([resourceId]) => {
      db("project_resource").insert({
        project_id: project_id,
        resource_id: resourceId,
      });
    });
}