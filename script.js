//Fecha actual
$("#currentDay").text(moment().format('dddd, MMMM Do '));
//Array con horas de trabajo
var horas=["9","10","11","12","13","14","15","16","17"];
var eventT=[];
var eventH=[];
//Creacion de tabla
var crteTable =$("<table>");
    crteTable.addClass('time-block');
//Creacion del body de tabla
var crteTb =$("<tbody>");
//Se generan en el html
$(".containe").append(crteTable);
    crteTable.append(crteTb);