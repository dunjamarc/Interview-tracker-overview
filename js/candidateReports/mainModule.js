import { createCandidate, createReport }  from '../dataModule.js';
import { viewSingleCandidate, viewReport } from './UIModule.js';

let allReports = [];

const singleCandidate = () => {
    let id = localStorage.getItem('id');

    fetch(`http://localhost:3333/api/candidates/${id}`)
        .then(response => response.json())
        .then(candidate => {
            const oneCandidate = createCandidate(candidate.id, candidate.name, candidate.birthday, candidate.email, candidate.education, candidate.avatar);
            viewSingleCandidate(oneCandidate);
        })

    fetch('http://localhost:3333/api/reports')
        .then(response => response.json())
        .then(reports => {
            reports.forEach(report => {
                if(report.candidateId == id){
                    const singleReport = createReport(report.candidateId, report.candidateName, report.companyId, report.companyName, report.interviewDate, report.phase, report.status, report.note, report.id);
                    viewReport(singleReport);
                }
            })
        })

}


export default singleCandidate;

//console.log(NaN === NaN)