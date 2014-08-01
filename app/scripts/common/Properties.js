'user strict';

function Properties(){
    return {
        development:{
            dataSource:{
                baseUrl: 'https://api.mongolab.com/api/1/databases/',
                database: 'phonecatdb',
                apiKey: 'WDEbDbrj6btv1Fb8n5E4NPNNQdiICGtD'
            }
        },
        test:{
            dataSource:{
                baseUrl: 'https://api.mongolab.com/api/1/databases/',
                database: 'phonecatdb',
                apiKey: 'WDEbDbrj6btv1Fb8n5E4NPNNQdiICGtD'
            }
        },
        production:{
            dataSource:{
                baseUrl: 'https://api.mongolab.com/api/1/databases/',
                database: 'phonecatdb',
                apiKey: 'WDEbDbrj6btv1Fb8n5E4NPNNQdiICGtD'
            }
        },
        environment: 'development'
    };
}