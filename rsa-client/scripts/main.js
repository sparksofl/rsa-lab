$(document).ready(function () {
  $(".encryption-form").submit(function (e) {
    var url_keys = "http://localhost:4000/api/rsa/generate_keys";
    var url_decrypt = "http://localhost:4000/api/rsa/decrypt";
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: url_keys,
      data: "",
      dataType: "json",
      success: function(key)
      {
        var encrypted = encrypt(key.key, $(".encryption-form").serializeArray()[0].value);
        data = {data: encrypted};
        $.ajax({
          type: "POST",
          url: url_decrypt,
          data: data,
          success: function(data)
          {
            alert('decoded text: ' + data.data);
          }
        });
      }
    });
  })
});

function encrypt(key, text) {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);
  return encrypt.getKey().encrypt(text);
}
