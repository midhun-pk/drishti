const config = require('../../../server/config/config');
const fs = require('fs');

exports.getAll = (req, res) => {
    res.status(200).send(config.tasks);
}

exports.getFrames = (req, res) => {
    let name = req.params.name;
    config.tasks.forEach((task) => {
        if (task.name == name) {
            let fileSrc = [];
            fs.readdir(task.frames, (err, files) => {
                if (err) {
                    res.status(404).send('Unable to find frames');
                } else {
                    files.forEach(file => {
                        fileSrc.push(task.frames + '/' + file);
                    });
                    return res.status(200).send(fileSrc);
                }

            });
        }
    });
}

exports.save = (req, res) => {
    console.log(req.body.task, ' saved')
    console.log(req.body.frames);
    res.status(200).send({ message: 'saved' });
}