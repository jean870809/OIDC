const fetch = require("node-fetch");



var key = 'AAAAsbNDVbs:APA91bG7xWF5l0EUl6UHLeOJyXUtL7AgzmGkw_F4BCoAxKJOZh_SVp7zhfypLaisu2_godUq31RWfTHiu-lzXkIsgvbrmWUBiPlWEDiRCZiPvieZjeiWVp823py053b2z5uJJpUkwJne';
//var to ="diLr1C-mPxhWZURQKT9F5q:APA91bE0zTAjworAE4vZ43aEA5aaXME5C8wK98MTyqGSrx2NUzEIo7PNvhZNsgz3PRgSnS_oQsE3SyR3LTrrGSnk-c4dD43aZuWBCqfbaNfW7QDu04VppCzWzPXwRT5CSQquvR-Akz8O"; //可儂電腦
//var to ="dRhqs6iNw_nQr2CIL0fndt:APA91bHzIK4hvF-5yLSZBemQgX2Qu-XyDcvdrfaow7TwYSP0KrPhz7_xiHXjLZ9p2cldye9QbZQ85myKo8CWbRVpgKCA39ebQg7nMHnl0BsuBpNGzJiUZhC8g18wjkGCKtDPhGlyrA4w";
var to = "f96ydQewr9K8DBitZLy3wL:APA91bHB-WcoqqZymKzjZDPhC0BcGruwJNBemDDJJcqBJvbohtkJpWOJn0_jSGhy49tcJQs60uvBFSAyYwKHUeRFTCu5sWJ3_e2CLE2PAr-wC7LR5rCUdRhJSalcvWaEaPYUINFZ55Gg";
var notification = {
  'title': '股金中外 Win The Jackpot',
  'body': '該更換你的投資組合嘍，目前股金中外推薦最佳投資組合為AAPL、MCD、NKE...',
  'icon': 'https://firebasestorage.googleapis.com/v0/b/test-f3031.appspot.com/o/%E6%AD%B7%E5%8F%B2%E7%BE%8A.jpg?alt=media&token=cc95d21d-7aed-472d-911f-1bdeda3ecc11',
  'image': 'https://firebasestorage.googleapis.com/v0/b/test-f3031.appspot.com/o/WTJ_resized.png?alt=media&token=2e777a4e-6790-442b-b45e-46e4d9c290c3',
  'click_action': 'https://jean870809.github.io/ruby/dawho.html'
};
//image size 2:1 (500:250)
fetch('https://fcm.googleapis.com/fcm/send', {
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

