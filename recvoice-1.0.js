/*!
 * RecVoice Javascript Chrome Library 1.0
 * https://github.com/JeanGoncalves/recVoice
 *
 * Author: Jean Gonçalves
 * Email: jeanfpgoncalves@live.com
 *
 * Date: 2015-09-25
 */

(function($) {

    $.fn.recVoice = function() {
        verify();

        var self = $(this);

        var location;
        for (var i = 0; i < self.parent().children().length; i++) {
            if ($(self.parent().children()[i])[0] === self[0])
                location = $(self.parent().children()[i - 1]);
        }
        console.log(location);
        var spech = createSpeech(self);

        var div = createDiv();

        var buttonStart = createButton('Iniciar');
        buttonStart.addEventListener('click', function() {
            spech.start();
            buttonStart.disabled = true;
            buttonStop.disabled = false;
        });

        var buttonStop = createButton('Parar', true);
        buttonStop.addEventListener('click', function() {
            spech.stop();
            buttonStart.disabled = false;
            buttonStop.disabled = true;
        });


        location.append(buttonStart);
        location.append(buttonStop);
    };

    var createButton = function(options, disabled) {
        var btn = document.createElement('INPUT');
        btn.setAttribute("type", "button");

        btn.value = 'Novo Botão';
        if (options)
            btn.value = options;

        btn.disabled = false;
        if (disabled)
            btn.disabled = disabled;

        return btn;
    };

    var createDiv = function() {
        var div = document.createElement("DIV");
        return div;
    };

    var createSpeech = function(elem) {
        var speech = new webkitSpeechRecognition;
        speech.continuous = true;
        speech.interimResults = true;
        speech.lang = navigator.language;
        speech.onresult = function(e) {
            var text = e.results[e.results.length - 1][0].transcript;
            elem.html(text);
        }
        return speech;
    };

    var verify = function() {
        if (typeof webkitSpeechRecognition !== 'function')
            throw new Error("\n\nDon't have a function webkitSpeechRecognition in your navigator.\nNeed a use Chrome Browser.\n\n");
    };
}(jQuery));