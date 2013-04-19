@ECHO OFF
REM
REM Requires Node.js, JSHint, Recess, and UglifyJS
REM Run this command after node.js is installed
REM   npm install -g less jshint recess uglify-js
REM
 
MKDIR bootstrap\img
MKDIR bootstrap\css
MKDIR bootstrap\js
MKDIR bootstrap\font
 
REM COPY  img\* bootstrap\img
COPY font\* bootstrap\font
 
CALL lessc less\bootstrap.less > bootstrap\css\bootstrap.css
CALL lessc -x less\bootstrap.less > bootstrap\css\bootstrap.min.css
 
CALL lessc less\responsive.less > bootstrap\css\bootstrap-responsive.css
CALL lessc -x less\responsive.less > bootstrap\css\bootstrap-responsive.min.css

CALL lessc less\font-awesome-ie7.less > bootstrap\css\font-awesome-ie7.css
CALL lessc -x less\font-awesome-ie7.less > bootstrap\css\font-awesome-ie7.min.css
 
COPY /B ^
 js\bootstrap-transition.js+ ^
 js\bootstrap-alert.js+ ^
 js\bootstrap-button.js+ ^
 js\bootstrap-carousel.js+ ^
 js\bootstrap-collapse.js+ ^
 js\bootstrap-dropdown.js+ ^
 js\bootstrap-modal.js+ ^
 js\bootstrap-tooltip.js+ ^
 js\bootstrap-popover.js+ ^
 js\bootstrap-scrollspy.js+ ^
 js\bootstrap-tab.js+ ^
 js\bootstrap-typeahead.js bootstrap\js\bootstrap.js
 
CALL uglifyjs bootstrap\js\bootstrap.js > bootstrap\js\bootstrap.min.js