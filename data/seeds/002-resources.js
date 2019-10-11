
exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "luis", description: "" },
    { name: "instructor", description: "teaches" },
    { name: "engineer", description: "" },
    { name: "lab", description: "" },
    { name: "i am the", description: "BEST" },
  ]);
};