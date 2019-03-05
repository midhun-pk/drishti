import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {


    constructor(private httpClient: HttpClient) {

    }

    getAllTasks() {
        return this.httpClient.get('/api/tasks');
    }

    getFrames(name: string) {
        return this.httpClient.get('/api/tasks/' + name + '/frames');
    }

    saveSelected(task: string, frames: any[]) {
        return this.httpClient.post('/api/task', {
            task: task,
            frames: frames
        })
    }
}

