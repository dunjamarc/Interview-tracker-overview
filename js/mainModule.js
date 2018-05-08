import createCandidate from './dataModule.js';
import viewCandidates from './UIModule.js';


const allCandidates = () => {

    const candidatesRequest = 'http://localhost:3333/api/candidates';

    fetch(candidatesRequest)
        .then(response => response.json())
        .then(candidates => {
            candidates.forEach(candidate => {
                const oneCandidate = createCandidate(candidate.id, candidate.name, candidate.birthday, candidate.email, candidate.education, candidate.avatar);
                viewCandidates(oneCandidate);
            })
        })

}

export default allCandidates;