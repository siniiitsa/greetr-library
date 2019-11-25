(function (global, $) {

  const Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  Greetr.prototype = {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    validate() {
      if (!supportedLangs.includes(this.language)) {
        throw new Error('Invalid language');
      }
    },

    greeting() {
      return `${greetings[this.language]}, ${this.firstName}!`
    },

    formalGreeting() {
      return `${formalGreetings[this.language]}, ${this.fullName()}`
    },

    greet(isFormal) {
      const msg = isFormal
        ? this.formalGreeting()
        : this.greeting();

      // support for IE
      if (console) console.log(msg);

      // 'this' refers to the calling object at execution time
      // makes the mehtod chainable
      return this;
    },

    log() {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }

      return this;
    },

    setLang(newLang) {
      this.language = newLang;
      this.validate();
      return this;
    },

    update(selector) {
      if (!selector) throw new Error('No selector passed');
      if (!$) throw new Error('No jQuery object passed');

      $(selector).text(this.greeting());

      return this;
    },
  };

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

  Greetr.init = function (firstName, lastName, language) {
    const self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);