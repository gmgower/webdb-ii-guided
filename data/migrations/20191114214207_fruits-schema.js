
// implement my changes
exports.up = function(knex) {
 // ? s7
 return knex.schema.createTable('fruits', tbl => {
     tbl.increments('id');
     // contranst
     tbl.string('name', 128).unique().notNullable();
     tbl.decimal('avgWeightOz');
     tbl.boolean('delicious');
 })  
};

// rollback my changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};

// ? s8 npx knex migrate:make fruits-color