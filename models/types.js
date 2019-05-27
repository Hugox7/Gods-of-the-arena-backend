const { Model } = require('./_connection');

class Types extends Model {

    static get tableName() {
        return 'types';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'typeName',
                
            ],

            properties: {
                id:             { type: 'integer' },
                typeName:       { type: 'string' },
            }
        }
    }

}

module.exports = Types;