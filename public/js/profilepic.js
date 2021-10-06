

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');

imgDiv.addEventListener('mouseenter', function()
{
uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function()
{
    uploadBtn.style.display = "none";
});

file.addEventListener('change', function(){
console.log (this)    
const chooseFile = document.querySelector('#file').files[0];
console.log (chooseFile)

if (chooseFile) {
    console.log (chooseFile)
    const reader = new FileReader();
    console.log (reader)

    reader.addEventListener('load', function (){
        img.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(chooseFile);
}
});