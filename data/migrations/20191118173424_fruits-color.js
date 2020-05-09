//?s9
exports.up = function(knex) {
  return knex.schema.table('fruits', tbl => {
      tbl.string('color', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.table('fruits', tbl => {
      tbl.dropColumn('color');
  });
};

//? s10 npx knex migrate:latest
    // npx knex migrate:rollback
