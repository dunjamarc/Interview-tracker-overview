
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

class Report {

    constructor (candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note, id){
        this.candidateId = candidateId;
        this.candidateName = candidateName;
        this.companyId = companyId;
        this.companyName = companyName;
        this.interviewDate = interviewDate;
        this.phase = phase;
        this.status = status;
        this.note = note;
        this.id = id;
    }
}

export const createCandidate = (id, name, birthday, email, education, avatar) => new Candidate(id, name, birthday, email, education, avatar);
export const createReport = (candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note, id) => new Report(candidateId, candidateName, companyId, companyName, interviewDate, phase, status, note, id);
