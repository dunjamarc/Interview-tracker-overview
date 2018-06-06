import createCandidate from '../dataModule.js';
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
                viewCandidates(oneCandidate);
            })
        })
        .then(() => {
            switchToSingleCandidate();
        })
}


/*const searchedCandidates = () => {
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

export const onLoadPage = () => {
    document.querySelector('input').addEventListener('keyup', searchedCandidates);
    allCandidates();

}*/

const switchToSingleCandidate = () => {
    let cardLinks = document.querySelectorAll('.cardLink');
    
    cardLinks.forEach(el => {
        el.addEventListener('click', (event) => {
            let candidateId = el.getAttribute('id');
            localStorage.setItem("id", candidateId);
        });
        
    })
}

export default allCandidates;

