exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "listen to luis",
      notes: "",
      task_completed: false,
      project_id: 1,
    },
    {
      description: "learn",
      notes: "",
      task_completed: false,
      project_id: 1,
    },
    {
      description: "join students",
      notes: "",
      task_completed: false,
      project_id: 2,
    },
    {
      description: "peer program",
      notes: "learned from each other",
      task_completed: false,
      project_id: 2,
    },
    {
      description: "review exe",
      notes: "",
      task_completed: false,
      project_id: 3,
    },
    {
      description: "join other engineers",
      notes: "",
      task_completed: false,
      project_id: 4,
    },
    {
      description: "who even is this guy",
      notes: "",
      task_completed: false,
      project_id: 4,
    },
  ]);
};