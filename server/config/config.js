module.exports = {
    tasks: [
        {
            name: 'task1',
            _id: 'UID-1',
            frames: 'server/assets/Images/set1'
        },
        {
            name: 'task2',
            _id: 'UID-2',
            frames: 'server/assets/Images/set2'
        }
    ],
    host: 'localhost',
    port: '3000',
    server: {
        routes: [
            'server/tasks/routes/tasks.server.routes.js',
            'server/core/routes/core.server.routes.js',
        ]
    }
}
