import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';

class PeopleStore {

    @observable people = [];

    constructor() {
    }

    all() {
        return this.people;
    }

    person(name) {
        return this.people.filter(
                person => person.name === name
        );
    }

    addPeople(name) {
        this.people.push({
            name: name
        });
    }
}


export default PeopleStore;

