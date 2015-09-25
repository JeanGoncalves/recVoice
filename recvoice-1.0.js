/*!
 * RecVoice Javascript Chrome Library 1.0
 * https://github.com/JeanGoncalves/recVoice
 *
 * Author: Jean Gonçalves
 * Email: jeanfpgoncalves@live.com
 *
 * Date: 2015-09-24
 */

(function ( $ ) {

	$.fn.recVoice = function() {

		var self = $(this.selector);
		var spech = createSpeech(self);

		var buttonStart = createButton('Iniciar');
		buttonStart.addEventListener('click',function(){
			spech.start();
			buttonStart.disabled = true;
			buttonStop.disabled = false;
		});
		
		var buttonStop = createButton('Parar',true);
		buttonStop.addEventListener('click',function(){
			spech.stop();
			buttonStart.disabled = false;
			buttonStop.disabled = true;
		});


		self.parent().append(buttonStart);
		self.parent().append(buttonStop);
	};

	var createButton = function(options,disabled) {
		var btn = document.createElement('INPUT');
		btn.setAttribute("type","button");

		btn.value = 'Novo Botão';
		if(options)
			btn.value = options;

		btn.disabled = false;
		if(disabled)
			btn.disabled = disabled;

		return btn;		
	};

	var createSpeech = function(elem) {
		var speech = new webkitSpeechRecognition;
		speech.continuous = true;
		speech.interimResults = true;
		speech.lang = 'pt-BR';
		speech.onresult = function(e) {
			var text = e.results[e.results.length - 1][0].transcript;
			elem.html(text);
		}
		return speech;
	};
}( jQuery ));