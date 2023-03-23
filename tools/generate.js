const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Generate Repository Interface + Empty model + MySQL Repository + CRUD Controllers + Routes',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Repo-MySQL-Controllers',
        },
        stringReplacers: ['__modelname__'],
        output: {
            path: './src/',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Generate Controllers',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Repo-MySQL-Controllers/controllers',
        },
        stringReplacers: ['__modelname__'],
        output: {
            path: './src/controllers',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Generate Model',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Repo-MySQL-Controllers/models',
        },
        stringReplacers: ['__modelname__'],
        output: {
            path: './src/models',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Generate Repository',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Repo-MySQL-Controllers/repositories',
        },
        stringReplacers: ['__modelname__'],
        output: {
            path: './src/repositories',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },

    {
        option: 'Generate Routes',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/Repo-MySQL-Controllers/routes',
        },
        stringReplacers: ['__modelname__'],
        output: {
            path: './src/routes/',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },
]);