const { Model } = require('./_connection');

class Fights extends Model {

    static get tableName() {
        return 'fights';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'isActive',
                'createdAt',
                'endedAt',
            ],

            properties: {
                id:         { type: 'integer' },
                createdAt:  { type: 'string' },
                endedAt:    { type: 'string' },
            }
        }
    }

}

module.exports = Fights;