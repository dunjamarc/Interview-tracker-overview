import createCandidate from '../dataModule.js';
import viewSingleCandidate from './UIModule.js';

const singleCandidate = () => {
    let id = localStorage.getItem('id');

    fetch(`http://localhost:3333/api/candidates/${id}`)
        .then(response => response.json())
        .then(candidate => {
            const oneCandidate = createCandidate(candidate.id, candidate.name, candidate.birthday, candidate.email, candidate.education, candidate.avatar);
            viewSingleCandidate(oneCandidate);
        })
}

export default singleCandidate;