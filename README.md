# Frontend-Boilerplate

1.  `npm install`

2.	create `.jshintrc` and `.gitignore` files in the root directory:
``` 
// .jshintrc
{
  "node": true,
  "browser": true,
  "es5": true,
  "esnext": true,
  "bitwise": true,
  "camelcase": true,
  "curly": true,
  "eqeqeq": true,
  "immed": true,
  "indent": 2,
  "latedef": true,
  "newcap": true,
  "noarg": true,
  "quotmark": "single",
  "regexp": true,
  "undef": true,
  "unused": true,
  "strict": true,
  "trailing": false,
  "smarttabs": true,
  "globals" : {
  "jQuery": true,
  "Modernizr": true
  }
}
```

``` 
// .gitignore
# Gulp Sass Base
# http://www.karlyhoffman.com
# @author Karly Hoffman


## Node.js
lib-cov
*.seed
*.log
*.csv
*.dat
*.out
*.pid
*.gz
pids
logs
results
npm-debug.log
node_modules

## Bower
src/components

## Sass
.sass-cache

## OS X
.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.Spotlight-V100
.Trashes

## Windows
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
```

3.  `gulp`

4.  build away!
