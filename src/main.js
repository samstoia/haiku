
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import Haiku from './checker.js';

$(document).ready(function() {
  $('#haikuForm').submit(function(event) {
    event.preventDefault();
    let firstLine = $("#firstLine").val();
    let secondLine = $("#secondLine").val();
    let thirdLine = $("#thirdLine").val();
    let haiku = new Haiku(firstLine, secondLine, thirdLine);
    $("#solution").text(haiku.isValid());
  });
  $(".btn").click(function() {
    let haiku = new Haiku("a", "b", "c");
    let randomHaiku = haiku.generateHaiku();
    $("#makeLineOne").text("");
    $("#makeLineOne").append(randomHaiku.line1);

    $("#makeLineTwo").text("");
    $("#makeLineTwo").append(randomHaiku.line2);

    $("#makeLineThree").text("");
    $("#makeLineThree").append(randomHaiku.line3);
  });

});
