const { Model } = require('./_connection');

class Gladiators extends Model {

    static get tableName() {
        return 'gladiators';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'name',
                'type',
            ],

            properties: {
                id:         { type: 'integer' },
                name:       { type: 'string' },
                type:       { type: 'integer' },
            }
        }
    }

}

module.exports = Gladiators;