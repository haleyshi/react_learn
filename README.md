### React + Express

#install nodejs
node -v
npm -v

npm install -g bower

npm init
bower init

npm install --save express ejs

npm install -g gulp
npm install --save gulp gulp-live-server
npm install --save browser-sync
npm install --save react
bower install --save react
npm install --save react-dom
npm install -g react-tools
npm install -g browserify
npm install --save reactify
npm install --save browserify
npm install --save vinyl-source-stream
npm install --save node-uuid
bower install --save skeleton
npm install --save body-parser
npm install --save jquery

# install MongoDB
> mongod

npm install --save mongoose

npm install --save babel-register
npm install --save-dev babel-preset-react
npm install --save babel-plugin-transform-react-jsx

vi .babelrc
#####################
{
    "plugins": ["transform-react-jsx"],
    "ignore": [
        "foo.js",
        "bar/**/*.js"
    ]
}
########################

vi gulpfile.js
> gulp serve
