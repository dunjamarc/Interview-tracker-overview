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
    let a = $(`<a href="#${singleReport.id}" data-toggle="modal"></a>`);
    let span = $('<span class="glyphicon glyphicon-eye-open"></span>');

    a.append(span);
    td4.append(a);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    $('tbody').append(tr);

    //modal
    let modal = $('#myModal').clone();    
    modal.attr('id', singleReport.id);
    $('body').append(modal);

    $(`#${singleReport.id} h3.modal-title`).html(singleReport.candidateName);
    $(`#${singleReport.id} h3.com`).html(singleReport.companyName);
    $(`#${singleReport.id} h3.dat`).html(date(singleReport.interviewDate));
    $(`#${singleReport.id} h3.pha`).html(singleReport.phase);
    $(`#${singleReport.id} h3.sta`).html(singleReport.status);
    $(`#${singleReport.id} p.not`).html(singleReport.note);
    
}
