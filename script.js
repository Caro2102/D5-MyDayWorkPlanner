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
    
function schedule(){
    save(m);
        for(var i=0; i<horas.length; i++) {
            //Hora actual formato 24hrs
            var currentT=moment();
            var actualT=[];
                actualT.push(currentT.format('HHA'))
            //A cada una de las horas del array se ponen en formato 24hrs
            var current= moment().hour(horas[i]);
            var newTime=[];
                newTime.push(current.format('HHA'))
                
            var crteTr =$("<tr>");
            //Se crea un td para colocar las horas
            var crteTdH =$("<td>");
                crteTdH.addClass('hour col-sm-1');
                crteTdH.text(newTime)
                eventH=crteTdH.text();
            //Se crea td para colocar textArea
            var crteTdE =$("<td>");
                crteTdE.addClass('event-day col-lg-11');
            //Se crea text Area
            var crteTextA=$("<textarea>");
                crteTextA.addClass('row ');
            //Se crea td que funciona como boton
            var crteTdB =$("<td>");
                crteTdB.addClass('saveBtn col-lg-2');
            //Se agrega icono guardar
            var icon = $("<i>");
                icon.addClass("far fa-save");

        //A cada una de las horas del array se le va a generar una fila con hora, text area y boton
        crteTb.append(crteTr);
        crteTr.append(crteTdH);
        crteTr.append(crteTdE);
        crteTdE.append(crteTextA)
        crteTr.append(crteTdB);
        crteTdB.append(icon);

    }
}