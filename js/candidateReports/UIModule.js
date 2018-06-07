let date = (date) => {
    let dob = new Date(date);
    return `${dob.getDate()}.${dob.getMonth() + 1}.${dob.getFullYear()}.`;
}

export const viewSingleCandidate = singleCandidate => {

    if (singleCandidate.avatar == "") {
        singleCandidate.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png"
    }
    $('img').attr("src", singleCandidate.avatar);
    $('#name').html(singleCandidate.name);    
    $('#email').html(singleCandidate.email);
    $('#dob').html(date(singleCandidate.birthday));
    $('#edu').html(singleCandidate.education);
}

export const viewReport = singleReport => {

    let tr = $('<tr>');
    let td1 = $(`<td>${singleReport.companyName}</td>`);
    let td2 = $(`<td>${date(singleReport.interviewDate)}</td>`);
    let td3 = $(`<td>${singleReport.status}</td>`);
    let td4 = $('<td></td>');
    let a = $('<a href="#"></a>');
    let span = $('<span class="glyphicon glyphicon-eye-open"></span>');

    a.append(span);
    td4.append(a);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    $('tbody').append(tr);
}
