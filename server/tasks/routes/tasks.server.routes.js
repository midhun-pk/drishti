module.exports = (app) => {

    const task = require('../controller/tasks.server.controller');

    // Get all tasks
    app.route('/api/tasks').get(task.getAll);

    // Save task
    app.route('/api/task').post(task.save);

    // Get frames of the task
    app.route('/api/tasks/:name/frames').get(task.getFrames);
}