/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'ChiChi', pet_type_id: 1, food_type_id: 1},
    {id: 2, name: 'FatChi', pet_type_id: 2, food_type_id: 1},
    {id: 3, name: 'MakoChi', pet_type_id: 3, food_type_id: 2},
    {id: 4, name: 'KiKi', pet_type_id: 4, food_type_id: 3}
  ]);
};
