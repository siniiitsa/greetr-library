(function (global, $) {

  // main object
  const Greetr = function (firstName, lastName, language) {
    // we return a call to a constructor of Greetr object to eliminate the need for "new" keyword typing
    return new Greetr.init(firstName, lastName, language);
  }

  // all the method that will be available to the instance of out Greetr object
  Greetr.prototype = {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    // private method to validate a if a new set language
    validate() {
      if (!supportedLangs.includes(this.language)) {
        throw new Error('Invalid language');
      }
    },

    // informal greetings
    greeting() {
      return `${greetings[this.language]}, ${this.firstName}!`
    },

    // formal greetings
    formalGreeting() {
      return `${formalGreetings[this.language]}, ${this.fullName()}`
    },

    // logs a greeting message
    // informal if no parameter passed, formal if passed truthy value
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

    // logs a message into console showing that a use has logged in to the system
    log() {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }

      return this;
    },

    // sets a new language of the greetr object
    setLang(newLang) {
      this.language = newLang;
      this.validate();
      return this;
    },

    // takes a jQuery selector as a parameter and updates the innerText value of the selectod node
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

    self.validate();
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

})(window, jQuery);