var init = function() {
    console.log('teste');

    var speech = new webkitSpeechRecognition;
    speech.continuous = true;
    speech.interimResults = true;
    speech.lang = 'pt-BR';
    speech.onresult = function(e) {
        console.log(e.results[e.results.length - 1][0].transcript);
        document.getElementById('text').innerHTML = e.results[e.results.length - 1][0].transcript;
    }

    document.getElementById('start').addEventListener('click', function() {
        console.log('start');
        speech.start();
    });
    document.getElementById('stop').addEventListener('click', function() {
        console.log('stop');
        speech.stop();
    });
}