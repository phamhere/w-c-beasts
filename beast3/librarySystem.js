(function() {
  let libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      const unpackedDependencies = dependencies.map(
        item => libraryStorage[item]
      );
      libraryStorage[libraryName] = callback(...unpackedDependencies);
    } else {
      return libraryStorage[libraryName];
    }
  }

  window.librarySystem = librarySystem;
})();

// test 1
librarySystem('dependency', [], function() {
  return 'loaded dependency';
});

librarySystem('app', ['dependency'], function(dependency) {
  return 'app with ' + dependency;
});

librarySystem('app'); // 'app with loaded dependency'

// test 2
librarySystem('name', [], function() {
  return 'Gordon';
});

librarySystem('company', [], function() {
  return 'Watch and Code';
});

librarySystem('workBlurb', ['name', 'company'], function(name, company) {
  return name + ' works at ' + company;
});

librarySystem('workBlurb'); // 'Gordon works at Watch and Code'
