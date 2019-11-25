const g = G$('Sergey', 'Sinitsa');

g
  .greet(true)
  .setLang('ru')
  .greet()
  .update('#greeting')
  .setLang('en')
  .update('#greeting')