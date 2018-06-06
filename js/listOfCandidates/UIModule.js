
const viewCandidates = candidate => {

    let wrapDiv = document.createElement('div');
    let card = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let link = document.createElement('a');

    wrapDiv.setAttribute("class", "col-md-3 col-sm-6 col-xs-12");
    card.setAttribute("class", "card");
    img.setAttribute("class", "card-img-top");
    if (candidate.avatar == "") {
        candidate.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png"
    }
    img.setAttribute("src", candidate.avatar);
    img.setAttribute("alt", "Card image cap");
    cardBody.setAttribute("class", "card-body");
    link.setAttribute("href", "singleCandidate.html");
    link.setAttribute("class", "cardLink");
    link.setAttribute("id", candidate.id);

    let name = document.createTextNode(candidate.name);
    h3.appendChild(name);
    let mail = document.createTextNode(candidate.email);
    p.appendChild(mail);
    cardBody.appendChild(h3);
    cardBody.appendChild(p);
    card.appendChild(img);
    card.appendChild(cardBody);
    link.appendChild(card);
    wrapDiv.appendChild(link);

    document.querySelector('.main').appendChild(wrapDiv);

}

export default viewCandidates;

