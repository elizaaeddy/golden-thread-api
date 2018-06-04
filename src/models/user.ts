import {Entity, property, model} from '@loopback/repository';

@model()
export class User extends Entity {

    @property({
        type: 'string',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
    })
    firstname: string;

    @property({
        type: 'string',
    })
    lastname: string;

    @property({
        type: 'string',
        required: true
    })
    username: string;

    @property({
        type: 'string',
    })
    email: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;


    getId() {
        return this.id;
    }
} 