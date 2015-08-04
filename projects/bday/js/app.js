$(function () {
  'use strict';
  var canvas = document.getElementById('q');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'lime';

  canvas.style.background = "black";
  var code = ["Матвей тебя любит", "Успехов в любом проекте", "Быстрой сети", "5г интерент в часы", "респонсив дисижн в лайф", "ТЫ СУПЕР СТАР ВЕЧНО МОЛОДОЙ", "СЧАСТЬЯЗДОРОВЬЯ", "ЛУЧШИЙ БРАТ НА СВЕТЕ", "ОБНИМАШКИ", "КОТИКИ"];

  // make 90 things to fall with a random code element and random starting location
  var things = [];
  var THINGCOUNT = 90;
  for (var i = 0; i < THINGCOUNT; i++) {
    var a = {};
    //randomly pick one tag
    a.code = code[Math.round(Math.random() * code.length)];
    a.x = Math.random() * 500; //random X
    a.y = Math.random() * 500 - 500; // random Y that is above the screen
    a.speed = Math.random() * 10;
    things.push(a);
  }

  setInterval(function () {
    ctx.clearRect(0, 0, 500, 500);
    for (var i = 0; i < THINGCOUNT; i++) {
      var a = things[i];
      ctx.fillText(a.code, a.x, a.y);
      a.y += a.speed; // fall downwards by the speed amount
      if (a.y > 600) a.y = -50; // if off the screen at bottom put back to top
    }
  }, 90);

});
