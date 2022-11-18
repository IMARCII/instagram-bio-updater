const Emoji = require('emoji-random-list');
const Config = require('./Config.json')

var _username = Config.instagram.username;
var _password = Config.instagram.password;
var _biography = Config.instagram.biography;
var _birthday = Config.birthday;
var _emojiType = Config.emojiType;
var _updateTime = Config.updateTime;
var _ageDigits = Config.ageDigits;
function _getEmoji() {
    return Emoji.random({ group: `${_emojiType}` });
}

function _getBiography(){
    return _biography.replace('#emoji#', _getEmoji).replace('#age#', _calculateAge);
}

function _calculateAge() {
    let birthday = new Date(`${_birthday}`) / 1000
    let today = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`) / 1000;
    let age = (today - birthday) / 31536000;

    return age.toFixed(_ageDigits);
}

module.exports = {
    getBiography: _getBiography,
    username: _username,
    password: _password,
    updateTime: _updateTime
}
