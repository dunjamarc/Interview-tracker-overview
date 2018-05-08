
class Candidate {
    constructor (id, name, birthday, email, education, avatar){
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.education = education;
        this.avatar = avatar;
    }
}

const createCandidate = (id, name, birthday, email, education, avatar) => new Candidate(id, name, birthday, email, education, avatar);

export default createCandidate;