//listen of a submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);
function submitForm(e) {
    e.preventDefault();
    //get input values
    let fullname=document.querySelector(".fullname").value;
    let email=document.querySelector(".email").value;
    let message=document.querySelector(".message").value;

    document.querySelector(".contact-form").reset();

    sendEmail(fullname,email,message);
}
//send email info
function sendEmail(fullname,email,message) {
    Email.send({
        Host:"smtp.gmail.com",
        Username:'saurabh5692792@gmail.com',
        Password:"tgsssncningpqdwj",
        To:'saurabh5692792@gmail.com',
        From:'saurabh5692792@gmail.com',
        Subject:`${fullname} sent you a message`,
        Body:`Name: ${fullname} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"));
}
