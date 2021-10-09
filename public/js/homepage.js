function wePik() {
    document.location.replace('/new-vote');
}

function youPik() {
    document.location.replace('/vote')
}

document.querySelector("#we").addEventListener('click', wePik);
document.querySelector("#you").addEventListener('click', youPik);