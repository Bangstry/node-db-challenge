
exports.seed = function(knex) {
  return knex("projects").insert([
    { name: "help roman",
      description: "not finished",
      task_completed: false },
    {
      name: "learn russian",
      description: "",
      task_completed: false,
    },
    { name: "drive tesla",
      description: "", 
      task_completed: false },
    { name: "successful dev",
      description: "learn and contiune learning code", 
      task_completed: false },
  ]);
};