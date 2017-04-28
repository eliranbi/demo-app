block content
   -  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  table
    - var list = ['one', 'two']
    - var itemName = 'test test'
    - each item in list
      tr
        td
          a(href="/collection") #{capitalize(itemName)}