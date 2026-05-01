class User {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getInfo(){
        return `${this.name} (${this.email})`
    }
}

export default User;