

const viewCandidates = candidate => {
    let wrapDiv = document.createElement('div');
    wrapDiv.setAttribute("class", "col-md-3 col-sm-6 col-xs-12");
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    let img = document.createElement('img');
    img.setAttribute("class", "card-img-top");
    if (candidate.avatar == "") {
        candidate.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png"
    }
    img.setAttribute("src", candidate.avatar);
    img.setAttribute("alt", "Card image cap");
    let cardBody = document.createElement('div');
    cardBody.setAttribute("class", "card-body");
    let h3 = document.createElement('h3');
    let name = document.createTextNode(candidate.name);
    h3.appendChild(name);
    let p = document.createElement('p');
    let mail = document.createTextNode(candidate.email);
    p.appendChild(mail);
    cardBody.appendChild(h3);
    cardBody.appendChild(p);
    card.appendChild(img);
    card.appendChild(cardBody);
    wrapDiv.appendChild(card);

    document.querySelector('.main').appendChild(wrapDiv);

}



export default viewCandidates;