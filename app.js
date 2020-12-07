// // element with tagName
// var textarea=document.querySelector('textarea');
// // element with name attribute
// var input =document.querySelector('input[name=translater]')
// // element with ID Selectore
// var button_handler=document.querySelector('#button-handler');
// // element with CLASS Selector
// var input_txt=document.querySelector(".input-txt");
// // console.log(button_handler);
// // input.addEventListener('change',function(e){
// //     console.log(e.target.value);
// // })
var input=document.querySelector('#input');
var button_handler=document.querySelector('#button-handler');
var output=document.querySelector('#output')
button_handler.addEventListener("click",buttonClick)
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    // query parameters ? , text -key ,text-value
    return serverURL+ "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured");
}

function buttonClick(){
    // input value
    var inputText=input.value;
    // Calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated
        output.innerText =translatedText})
    .catch(errorHandler)
}
