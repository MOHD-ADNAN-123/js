//STATIC PROPERTY

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //TO CONTROL THE ACCESS OF ANY METHOD
    static createId(){
        return `123`
    }
}

const adnan = new User("adnan")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId());