const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Generate repository interface + empty model + MySQL repository',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Repo-MySQL-Model',
        },
        stringReplacers: [{ question: 'Insert database repository model name: ', slot: '__modelname__'}],
        output: {
            path: './src/',
            pathAndFileNameDefaultCase: '(pascalCase)',
            overwrite: true
        },
        onComplete: (results) => {
            console.log("Generate repository interface + empty model + MySQL repository - Template successfully created!")
            //console.log(`results`, results);
        },
    },

    {
        option: 'Generate controller',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Controller',
        },
        stringReplacers: [{ question: 'Insert database repository model name: ', slot: '__modelname__'}, { question: 'Insert the controller name: ', slot: '__controllername__'}],
        output: {
            path: './src/',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log("Generate controller + route - Template successfully created!")
            //console.log(`results`, results);
        },
    },

    {
        option: 'Generate route',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Route',
        },
        stringReplacers: [{ question: 'Insert database repository model name: ', slot: '__modelname__'}, { question: 'Insert the controller that controls the route: ', slot: '__controllername__'}, { question: 'Insert the route name: ', slot: '__routename__'}],
        output: {
            path: './src/',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log("Generate controller + route - Template successfully created!")
            //console.log(`results`, results);
        },
    },
]);