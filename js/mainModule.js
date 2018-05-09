import createCandidate from './dataModule.js';
import viewCandidates from './UIModule.js';

let candidatesList = [];

const allCandidates = () => {

    const candidatesRequest = 'http://localhost:3333/api/candidates';

    fetch(candidatesRequest)
        .then(response => response.json())
        .then(candidates => {
            candidates.forEach(candidate => {
                const oneCandidate = createCandidate(candidate.id, candidate.name, candidate.birthday, candidate.email, candidate.education, candidate.avatar);
                candidatesList.push(oneCandidate);
            })
        })
}


const searchedCandidates = () => {
    let searchInput = document.querySelector('input').value.toLowerCase();
    
    let filteredList = candidatesList.filter(el => {
        if(el.name.toLowerCase().indexOf(searchInput) != -1){
            return el;
        }
    })
    filteredList.forEach( el => {
        viewCandidates(el);
    })
}

const onLoadPage = () => {
    document.querySelector('input').addEventListener('keyup', searchedCandidates);
    allCandidates();
}

export default onLoadPage;