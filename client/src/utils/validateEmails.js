const re =  	
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emails = (mails) => {
    const invalidEmails = mails.split(',').map(email => email.trim()).filter(email => re.test(email)=== false);
    if(invalidEmails.length){
        return `Estos correos son invalidos : ${invalidEmails}`;
    }
}
export default emails;
// export default emails => {
//     const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => re.test(email)=== false);
//     if(invalidEmails.length){
//         return `Estos emails son invalidos : ${invalidEmails}`;
//     }
// }