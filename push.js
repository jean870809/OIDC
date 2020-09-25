//const fetch = require("node-fetch");



var key = 'AAAAsbNDVbs:APA91bG7xWF5l0EUl6UHLeOJyXUtL7AgzmGkw_F4BCoAxKJOZh_SVp7zhfypLaisu2_godUq31RWfTHiu-lzXkIsgvbrmWUBiPlWEDiRCZiPvieZjeiWVp823py053b2z5uJJpUkwJne';
var to = "dyRFecNPWCXsZQbbbraxwf:APA91bHd2-1TkXATNyXOa3GnMXud6gX4Ie5DKKcSs2Yqh_kKCPpnoU0TLA1anKPNhM2ez4GvbNoe_TpmffvnODGJF2p087dNDh8fvdTJejM6a0qBR5NLzQZB3aQ6wexb9EbG_7rJfI7S";
var notification = {
  'title': '股金中外',
  'body': '該換檔喽咩噗',
  'icon': 'https://firebasestorage.googleapis.com/v0/b/test-f3031.appspot.com/o/%E6%AD%B7%E5%8F%B2%E7%BE%8A.jpg?alt=media&token=cc95d21d-7aed-472d-911f-1bdeda3ecc11',
};

window.fetch('https://fcm.googleapis.com/fcm/send', {
  'method': 'POST',
  'headers': {
    'Authorization': 'key=' + key,
    'Content-Type': 'application/json'
  },
  'body': JSON.stringify({
    'notification': notification,
    'to': to
  })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.error(error);
})