var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'articl-eone': {
    title:'Article-1',
    heading:'article one',
    date:'12 nov 2016',
    content:`
    <p>
                This is content of first article.This is content of first article.This is content of first article.This is content of first article.This is content of first article.This is content of first article
            </p>
            <p>
                This is content of first article.This is content of first article.This is content of first article.This is content of first article.This is content of first article.This is content of first article
            </p>
            <p>
                This is content of first article.This is content of first article.This is content of first article.This is content of first article.This is content of first article.This is content of first article
            </p>`
},
    'article-two': {
    title:'Article-2',
    heading:'article two',
    date:'13 nov 2016',
    content:`
    <p>
                This is content of second article.
            </p>`
    },
    'article-three': {
    title:'Article-3',
    heading:'article three',
    date:'14 nov 2016',
    content:`
    <p>
                This is content of third article.
            </p>`
            
    },
};

function createtemplate(data){
var title = data.title;
var date =data.date;
var heading=data.heading;
var content = data.content;
var htmltampelate = `
<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name='viewpoint' content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class='container'>
        <div>
            <a href = "/">home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.send(createtemplate(articleone));
});

app.get('/:articlename', function (req, res) {
    //articlename == articleone
    //articles[articalname] == content objects for articleone
    var articlename = req.params.articlename;
  res.send(createtemplate(articls[articlename]));
});

app.get('/article-two', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
