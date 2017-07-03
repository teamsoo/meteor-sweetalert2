Package.describe({
  name: 'teamsoo:meteor-sweetalert2',
  version: '1.0.0',
  summary: 'Meteor Package for SweetAlert2: a beautiful replacement for javascript\' alert()',
  git: 'https://github.com/teamsoo/meteor-sweetalert2.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.addFiles('sweetalert2/dist/sweetalert2.min.js', 'client');
  api.addFiles('sweetalert2/dist/sweetalert2.min.css', 'client');
});
