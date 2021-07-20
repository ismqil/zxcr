const express = require('express')
const app = express()
const port = 3000
const Database = require("lundb");
const db = new Database()
const password = require('secure-random-password');

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="tr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Zxcr | Url Kısaltma Sitesi.</title>
    <style>
    body {
      text-align: center;
    }
    </style>
  </head>
  <body>

<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://cdn.discordapp.com/attachments/852892046515765309/866943280884744213/Adsz.png" width="30" height="30" class="d-inline-block align-top" alt="q">
  </a>

        <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-download"></i></button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Projeyi İndir</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Bu proje açık kaynak kodlu projedir. <a>Buraya</a> tıklayarak projeyi indirebilirsin!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Kapat</button>
      </div>
    </div>
  </div>
</div>
</nav>

<center>
<h1 style="margin-top: 200px; font-size: 40px;" >Link Kısaltma</h1>

<form action="https://shortener.ismqil.repl.co/create" method=get >
<div style="width: 40%" class="input-group mb-3">
  <input  type="URL" name="link" class="form-control" placeholder="https://uzunwebsitelinki.com/" aria-label="https://uzunwebsitelinki.com/" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="submit">Kısalt</button>
  </div>
</div>
</form>
</center>
<script src="https://kit.fontawesome.com/1940a844c3.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
  `)
})

app.get('/create', (req, res) => {
  const a = req.query.link
  const q = password.randomPassword({ characters: [password.lower, password.upper, password.digits] })
  db.set(q, a)
  res.send("https://shortener.ismqil.repl.co/" + q)
})
app.get('/:code', (req, res) => {
  res.redirect(db.get(req.params.code))
})
app.listen(port, () => {
  console.log(`Proje ${port} üzerinden başlatıldı.`)
})
