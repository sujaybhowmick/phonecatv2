'use strict';

function Configuration(properties){

    properties.restUrl = eval('properties.' +  properties.environment + 
                            '.dataSource.baseUrl') + 
                        eval('properties.' + properties.environment +
                            '.dataSource.database');
    properties.apiKey = eval('properties.' + properties.environment + 
                            '.dataSource.apiKey');
    
    return properties;
}