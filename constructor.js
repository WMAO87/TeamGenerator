var fs = require('fs');

class Profile {
    constructor(name, position, id, email) {
        this.name = name
        this.position = position
        this.id = id
        this.email = email
    }
}

module.exports = Profile;