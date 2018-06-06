
const viewSingleCandidate = singleCandidate => {

    let date = () => {
        let dob = new Date(singleCandidate.birthday);
        return `${dob.getDate()}.${dob.getMonth() + 1}.${dob.getFullYear()}.`;
    }

    if (singleCandidate.avatar == "") {
        singleCandidate.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png"
    }
    document.querySelector('img').setAttribute("src", singleCandidate.avatar);
    document.querySelector('#name').innerHTML = singleCandidate.name;    
    document.querySelector('#email').innerHTML = singleCandidate.email;
    document.querySelector('#dob').innerHTML = date();
    document.querySelector('#edu').innerHTML = singleCandidate.education;
}

export default viewSingleCandidate;