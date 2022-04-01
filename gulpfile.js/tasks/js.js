#!/usr/bin/env node

"use strict";

const { src, dest, watch, series, parallel} = require('gulp');

const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const insert = require('gulp-insert');
const fs = require('fs');

const JS_SRC = '_javascript';
<<<<<<< HEAD
const JS_DEST = `assets/js/dist/`;
=======
const JS_DEST = `assets/js/dist`;
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

function concatJs(files, output) {
  return src(files)
    .pipe(concat(output))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(JS_DEST));
}

function minifyJs() {
  return src(`${ JS_DEST }/*.js`)
    .pipe(insert.prepend(fs.readFileSync(`${ JS_SRC }/copyright`, 'utf8')))
    .pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
    .pipe(dest(JS_DEST));
}

const commonsJs = () => {
  return concatJs(`${JS_SRC}/commons/*.js`, 'commons');
};

const homeJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/timeago.js`
    ],
    'home'
  );
};

const postJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/img-extra.js`,
      `${JS_SRC}/utils/timeago.js`,
      `${JS_SRC}/utils/checkbox.js`,
<<<<<<< HEAD
      `${JS_SRC}/utils/copy-link.js`,
=======
      `${JS_SRC}/utils/clipboard.js`,
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
      // 'smooth-scroll.js' must be called after ToC is ready
      `${JS_SRC}/utils/smooth-scroll.js`
    ], 'post'
  );
};

const categoriesJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/category-collapse.js`
    ], 'categories'
  );
};

const pageJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/checkbox.js`,
      `${JS_SRC}/utils/img-extra.js`,
<<<<<<< HEAD
      `${JS_SRC}/utils/copy-link.js`,
=======
      `${JS_SRC}/utils/clipboard.js`,
      `${JS_SRC}/utils/smooth-scroll.js`
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
    ], 'page'
  );
};

<<<<<<< HEAD
=======
const miscJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/locale-datetime.js`
    ], 'misc'
  );
};

>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
// GA pageviews report
const pvreportJs = () => {
  return concatJs(`${JS_SRC}/utils/pageviews.js`, 'pvreport');
};

<<<<<<< HEAD
const buildJs = parallel(commonsJs, homeJs, postJs, categoriesJs, pageJs, pvreportJs);
=======
const buildJs = parallel(
  commonsJs, homeJs, postJs, categoriesJs, pageJs, miscJs, pvreportJs);
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

exports.build = series(buildJs, minifyJs);

exports.liveRebuild = () => {
  buildJs();

  watch([
      `${ JS_SRC }/commons/*.js`,
<<<<<<< HEAD
      `${ JS_SRC }/utils/*.js`,
      `${ JS_SRC }/lib/*.js`
    ],
    buildJs
  )
}

=======
      `${ JS_SRC }/utils/*.js`
    ],
    buildJs
  );
};
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
