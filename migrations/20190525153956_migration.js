
exports.up = function(knex, Promise) {

    return Promise.all([
        knex.schema.createTable('fights', (t) => {
            t.increments('id').primary();
            t.integer('isActive').notNullable();
            t.string('createdAt').notNullable();
            t.string('endedAt').nullable();
        }),
        knex.schema.createTable('gladiators', (t) => {
            t.increments('id').primary();
            t.integer('type').unsigned().notNullable().references('id').inTable('types');
            t.string('name').notNullable();
        }),
        knex.schema.createTable('types', (t) => {
            t.increments('id').primary();
            t.string('typeName').notNullable();
        }),
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('fights'),
    knex.schema.dropTable('fighters'),
    knex.schema.dropTable('types'),
  ])
};
