
export const viewCandidates = candidate => {

    let wrapDiv = $('<div class="col-md-3 col-sm-6 col-xs-12"></div>');
    let card = $('<div class="card"></div>');
    let img = $('<img class="card-img-top" alt="Card image cap">');
    let cardBody = $('<div class="card-body"></div>');
    let h3 = $('<h3>');
    let p = $('<p>');
    let link = $(`<a href="singleCandidate.html" class="cardLink" id="${candidate.id}"></a>`);

    if (candidate.avatar == "") {
        candidate.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png"
    }
    img.attr("src", candidate.avatar);

    h3.html(candidate.name);
    p.html(candidate.email);
    cardBody.append(h3);
    cardBody.append(p);
    card.append(img);
    card.append(cardBody);
    link.append(card);
    wrapDiv.append(link);

    $('.main').append(wrapDiv);

}

export const clearList = () => {
    $('.main').html("");
}
