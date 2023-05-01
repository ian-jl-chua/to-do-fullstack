/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task_details: 'Some task', completed: false },
    { id: 2, task_details: 'Other task', completed: false },
    { id: 3, task_details: 'Some Other task', completed: false },
  ])
}
