const mainBox = document.getElementById('stringContainer'); //For Animations

//PASSWORD LENGTH BUTTONS
let passLength = 16; //Default lngth of password. This is changable with the buttons

document.getElementById('btn8').addEventListener('click', function(){
    passLength = 8;
    document.getElementById('stringContainer').style.width = "150px"
    document.getElementById('string').textContent = "Generate to start!";
    mainBox.classList.add('rubberBand')
    setTimeout(() => { mainBox.classList.remove('rubberBand');}, 500, );
    //console.log(passLength)
    return passLength;
});
document.getElementById('btn16').addEventListener('click', function(){
    passLength = 16;
    document.getElementById('stringContainer').style.width = "225px"
    document.getElementById('string').textContent = "Generate to start!";
    mainBox.classList.add('rubberBand')
    setTimeout(() => { mainBox.classList.remove('rubberBand');}, 500, );
    //console.log(passLength)
    return passLength;
});
document.getElementById('btn20').addEventListener('click', function(){
    passLength = 20;
    document.getElementById('stringContainer').style.width = "275px"
    document.getElementById('string').textContent = "Generate to start!";
    mainBox.classList.add('rubberBand')
    setTimeout(() => { mainBox.classList.remove('rubberBand');}, 500, );
    //console.log(passLength)
    return passLength;
});
document.getElementById('btn24').addEventListener('click', function(){
    passLength = 24;
    document.getElementById('stringContainer').style.width = "325px"
    document.getElementById('string').textContent = "Generate to start!";
    mainBox.classList.add('rubberBand')
    setTimeout(() => { mainBox.classList.remove('rubberBand');}, 500, );
    //console.log(passLength)
    return passLength;
});

//PASSWORD GENERATOR
randomString(passLength)

function randomString(passLength){
    //console.log(passLength)
    var randomPassword = '';
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+?!$/><)(%&*'
    for(var i, i = 0; i < passLength; i++){
        randomPassword += characters.charAt(Math.floor(Math.random() * characters.length))
    };
    console.log(randomPassword)
    return randomPassword;
};

//GENERATE BUTTON
document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('string').textContent = randomString(passLength);
    mainBox.classList.add('jelly')
    setTimeout(() => { mainBox.classList.remove('jelly');}, 350, );
});

/* Not working
//COPY BUTTON
function copyFunction(){
    var copyText = document.getElementById('string');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Password copied: " + copyText.value);
};
*/


/* Warmer
document.getElementById('cpyBtn').addEventListener('click', function(){
    var copyText = document.getElementById('string');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Password copied: " + copyText.value);
});
*/
/* Getting warmer. Just learned about clipboard events
const password = document.getElementById('string');
const copyButton = document.getElementById('copyBtn');

copyButton.addEventListener('click', function(){
    navigator.clipboard.write(password.select()); //this just literally copies "password.select()"
})
*/
/* execCommand is obselete
const password = document.getElementById('string');
const copyButton = document.getElementById('copyBtn');

copyButton.addEventListener('click', function(){
    password.select();
    document.execCommand("copy");
})
*/
/* More complicated than it needs to be
document.getElementById('btn').addEventListener('click', function(){
    var finalPassword = randomString(16)
    document.getElementById('string').textContent = finalPassword;
    console.log(finalPassword);
});
*/
/* Pure garbage
const stringSpace = document.getElementById('string');

document.getElementById('btn').addEventListener('click', function randomString(passLength){
    var randomPassword = '';
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+?!/><)(%&*';
    for(var i, i = 0; i < passLength; i++){
        randomPassword += characters.charAt(Math.floor(Math.random() * characters.length))
    };
    stringSpace.textContent = randomString(16);
});
*/