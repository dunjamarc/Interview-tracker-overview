

const viewCandidates = candidate => {
    let wrapDiv = document.createElement('div class="col-md-3 col-sm-6 col-xs-12"');
    let card = document.createElement('div class="card"');
    let img = document.createElement(`img class="card-img-top" src="${candidate.avatar}" alt="Card image cap"`);
    let cardBody = document.createElement('div class="card-body"');
    let h3 = document.createElement('h3');
    let name = document.createTextNode(`${candidate.name}`);
    h3.appendChild(name);
    let p = document.createElement('p');
    let mail = document.createTextNode(`${candidate.email}`);
    p.appendChild(mail);
    cardBody.appendChild(h3).appendChild(p);
    card.appendChild(img).appendChild(cardBody);
    wrapDiv.appendChild(card);

    document.querySelector('.main').appendChild(wrapDiv);
}

export default viewCandidates;