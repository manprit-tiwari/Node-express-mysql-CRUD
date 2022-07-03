const db = require('../util/database');
const User = class UserModel {
    constructor(firstName, lastName, mobile, image) {
        this.firstName = firstName;
        this.lastNmae = lastName;
        this.mobile = mobile;
        this.image = image;
    }

    save() {
        // console.log(this)
        return db.execute('INSERT INTO user (firstName,lastName,mobile,image) VALUES (?,?,?,?)', [this.firstName, this.lastNmae, this.mobile, this.image]);
    }

    static getAllUsers() {
        return db.execute('SELECT * FROM user');
    }

    static getSingleUser(sr,name) {
        return db.execute('SELECT * FROM user WHERE Sr = ? AND firstName = ?',[sr,name]);
    }

    static deleteUser(sr,name) {
        return db.execute('DELETE FROM user WHERE Sr = ? AND firstName = ?', [sr, name]);
    }
}

module.exports = User;