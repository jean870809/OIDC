//const fetch = require("node-fetch");



var key = 'AAAAsbNDVbs:APA91bG7xWF5l0EUl6UHLeOJyXUtL7AgzmGkw_F4BCoAxKJOZh_SVp7zhfypLaisu2_godUq31RWfTHiu-lzXkIsgvbrmWUBiPlWEDiRCZiPvieZjeiWVp823py053b2z5uJJpUkwJne';
var to = "e-nOK15Pd0LNM5ySXhjiSu:APA91bFpPkhgluLXKBBweGabTj_ahuVGfJESTgxbwUvU3umz4u3mS0tAYEUv-kUdNsDzV3ljIqMN3y1Nk4DSeKAWAutbSvI53a0eR7U0F6jQfwZBKWl1ePpAKpMHtK5JO0AOgZsom0kB";
var notification = {
  'title': '股金中外',
  'body': '唐唐生日快樂',
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
