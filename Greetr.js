(function (global, $) {

  const Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  Greetr.prototype = {};

  const supportedLangs = 'en-es-ru-ua'.split('-');

  const greetings = {
    en: 'Hello',
    es: 'Hola',
    ru: 'Привет',
    ua: 'Привіт'
  };

  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    ru: 'Здравствуйте',
    ua: 'Вітаю'
  }

  const logMessages = {
    en: 'Logged in',
    es: 'conectado',
    ru: 'Вход совершен',
    ua: 'Вхід здійснено'
  };

  Greetr.init = function (firstname, lastname, language) {
    const self = this;

    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);