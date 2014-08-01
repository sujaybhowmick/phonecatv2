'use strict';

function Configuration(properties){

    switch(properties.environment){

        case 'development':
            properties.restUrl = properties.development.dataSource.baseUrl +
                                properties.development.dataSource.database;
            properties.apiKey = properties.development.dataSource.apiKey;
        case 'test':
            properties.restUrl = properties.test.dataSource.baseUrl +
                                properties.test.dataSource.database;
            properties.apiKey = properties.test.dataSource.apiKey;
        case 'production':
            properties.restUrl = properties.production.dataSource.baseUrl +
                                properties.production.dataSource.database;
            properties.apiKey = properties.production.dataSource.apiKey;
        default:
            properties.restUrl = properties.development.dataSource.baseUrl +
                                properties.development.dataSource.database;
            properties.apiKey = properties.development.dataSource.apiKey;
    }
    return properties;
}