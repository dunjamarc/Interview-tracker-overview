
const viewSingleCandidate = singleCandidate => {

    let date = () => {
        let dob = new Date(singleCandidate.birthday);
        return `${dob.getDate()}.${dob.getMonth() + 1}.${dob.getFullYear()}.`;
    }

    if (singleCandidate.avatar == "") {
        singleCandidate.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png"
    }
    $('img').attr("src", singleCandidate.avatar);
    $('#name').html(singleCandidate.name);    
    $('#email').html(singleCandidate.email);
    $('#dob').html(date());
    $('#edu').html(singleCandidate.education);
}

export default viewSingleCandidate;