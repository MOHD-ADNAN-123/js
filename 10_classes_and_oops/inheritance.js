class User{
    constructor(username){
        this.username =username;
    }

    LogMe(){
        console.log(`${this.username}`);  
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
    addcourse(){
        console.log(`this course by added by ${this.username}`);
    }
}

const T1 =new Teacher("Adnan","ad@gc");
T1.addcourse();