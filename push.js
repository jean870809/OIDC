//const fetch = require("node-fetch");



var key = 'AAAAsbNDVbs:APA91bG7xWF5l0EUl6UHLeOJyXUtL7AgzmGkw_F4BCoAxKJOZh_SVp7zhfypLaisu2_godUq31RWfTHiu-lzXkIsgvbrmWUBiPlWEDiRCZiPvieZjeiWVp823py053b2z5uJJpUkwJne';
//var to = "dZG4J0imoiJsSFfvVXiP69:APA91bF7M9R1hUW1jbao2YYu3EgR9P5acfftpptsBIg2ip9edX3o_hdNBov4l063Jq-NyetSS0BFD8W0YvarcKizHo-rCKJrejt9BsOAFXBCD7Dh_fC0GSR8qf1tFkPRnYPY9wpJ6qEP";
//var to ="cSKIp6orG65ao2E3B4xmkZ:APA91bGRUaisC5nv6Omg-5rcZIcEcIIrGP1mrjucpRbGtWDdBZaEi_g-r6UPHjtBnZVsSLdQE3NLCMhccwiufBFyJQCTytSZs4vwXFJhM8Twqwh49e-64vZ9zDtfaV4RsNcAquMeFRcV";
var to ="diLr1C-mPxhWZURQKT9F5q:APA91bE0zTAjworAE4vZ43aEA5aaXME5C8wK98MTyqGSrx2NUzEIo7PNvhZNsgz3PRgSnS_oQsE3SyR3LTrrGSnk-c4dD43aZuWBCqfbaNfW7QDu04VppCzWzPXwRT5CSQquvR-Akz8O";
var notification = {
  'title': '股金中外',
  'body': '該更換你的投資組合嘍，目前股金中外推薦最佳投資組合為AAPL、MCD、NKE...',
  'icon': 'https://firebasestorage.googleapis.com/v0/b/test-f3031.appspot.com/o/%E6%AD%B7%E5%8F%B2%E7%BE%8A.jpg?alt=media&token=cc95d21d-7aed-472d-911f-1bdeda3ecc11',
  'image': 'https://firebasestorage.googleapis.com/v0/b/test-f3031.appspot.com/o/%E6%AD%B7%E5%8F%B2%E7%BE%8A.jpg?alt=media&token=cc95d21d-7aed-472d-911f-1bdeda3ecc11',
  'click_action': 'https://jean870809.github.io/ruby/dawho.html'
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
