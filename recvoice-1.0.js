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
        var spech = createSpeech(self);
        var div = createDiv();
        var start = buttonStart();
        var stop = buttonStop();

        start.addEventListener('click', function() {
            spech.start();
            $(start).hide();
            $(stop).show();
            start.disabled = true;
            stop.disabled = false;
        });

        stop.addEventListener('click', function() {
            spech.stop();
            $(start).show();
            $(stop).hide();
            start.disabled = false;
            stop.disabled = true;
        });

        self.wrap(div);
        var container = document.getElementById('recvoice-container');
        $(container).prepend(start).prepend(stop);
        var style = createStyle();
        $('body').append(style);
    };

    var buttonStart = function(){
        var classButton = document.createAttribute('class');
        classButton.value = 'button button-recvoice';
    	var button = createButton('Iniciar');
    	button.id = 'recvoice-buttonstart';
    	button.setAttributeNode(classButton);
        return button;
    };

    var buttonStop = function() {
    	var button = createButton('Parar', true);
    	button.id = 'recvoice-buttonstop';
        var classButton = document.createAttribute('class');
        classButton.value = 'button button-recvoice';
    	button.setAttributeNode(classButton);
    	button.class = 'button button-recvoice';
    	$(button).hide();
        return button;
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
        div.id = "recvoice-container";
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

    var createStyle = function() {

    	var style = document.createElement('STYLE');
    	var s = [];
    	s.push(document.createTextNode('.button-recvoice{ position: relative; float:right; right:52px; }'));
    	s.push(document.createTextNode('#recvoice-container{ position: absolute; }'));

    	for( var x in s) 
    		style.appendChild(s[x]);
    	return style;
    };

    var verify = function() {
        if (typeof webkitSpeechRecognition !== 'function')
            throw new Error("\n\nDon't have a function webkitSpeechRecognition in your navigator.\nNeed a use Chrome Browser.\n\n");
    };
}(jQuery));