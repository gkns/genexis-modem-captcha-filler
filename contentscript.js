var script = document.scripts[3].text;
var script_text = script.match(/ code = .*"/g);
var captcha_code = script_text[0].split("\"")[1];
document.getElementsByName("captchaTextBox")[0].value = captcha_code;