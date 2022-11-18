/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'kibble', description: 'dry, dull, small bits of food'},
    {id: 2, name: 'raw', description: 'live food ready to eat'},
    {id: 3, name: 'seed', description: 'plant stuff'}
  ]);
};
