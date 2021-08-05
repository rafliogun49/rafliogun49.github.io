const accumulativeCharacter = document.getElementById('accumulativeCharacter');
const residualCharacter = document.getElementById('residualCharacter');
const twitterForm = document.getElementById('twitter');
const twitterText = document.getElementById('twitterText');
const copyButton = document.getElementById('copyButton');
const deleteButton = document.getElementById('deleteButton');

twitterText.addEventListener('input', () => {
    const totalText = twitterText.value.length;
    textSetting(totalText);
});
function textSetting(totalText) {
    const residualText = 280 - totalText;
    accumulativeCharacter.innerHTML = totalText;
    residualCharacter.innerHTML = residualText;

    if (totalText > 280) {
        accumulativeCharacter.style.background = '#fff';
        residualCharacter.style.background = '#fff';
        accumulativeCharacter.style.color = '#ff4c29';
        residualCharacter.style.color = '#ff4c29';
        accumulativeCharacter.style.borderRadius = '10px';
        residualCharacter.style.borderRadius = '10px';
    } else {
        accumulativeCharacter.style.background = 'none';
        residualCharacter.style.background = 'none';
        accumulativeCharacter.style.color = '#fff';
        residualCharacter.style.color = '#fff';
    }
}
function deleteText() {
    twitterText.value = '';
    const totalText = 0;
    textSetting(totalText);
}
function copyText() {
    twitterText.select();
    document.execCommand("copy");
    alert("Copy text was successful");
}
