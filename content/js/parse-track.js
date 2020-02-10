var table_str = ACD.responseText.substring(ACD.responseText.indexOf("<table"), ACD.responseText.indexOf("</body>"));
var startInd = 0;
var endInd = 0;
var count = 0;
var links = [];

//Getting the track and the subjects
var track = String(ACD.request).substring(String(ACD.request).indexOf("matt_"), String(ACD.request).indexOf(".html"));
track = parseInt(track.replace('matt_', ''), 10);

startInd = table_str.indexOf("<a");
endInd = table_str.indexOf("/a>");
var link = "";
while (startInd != -1) {
  link = table_str.substring(startInd, endInd) + '/a>';
  link = link.replace('/documents', 'http://infoteleco.upc.edu/documents');
  links.push(link);
  count = count + 1;
  startInd = table_str.indexOf("<a", (startInd + count));
  endInd = table_str.indexOf("/a>", (endInd + count));
}


//Getting the number of recommended, elective, levelling subjects
var numRecom = 0;
var numElective = 0;
var numLevel = 0;
var position = table_str.indexOf('warning');

while (position !== -1) {
  numRecom++;
  position = table_str.indexOf('warning', position + 1);
}
var position = table_str.indexOf('success');
while (position !== -1) {
  numElective++;
  position = table_str.indexOf('success', position + 1);
}
var position = table_str.indexOf('info');
while (position !== -1) {
  numLevel++;
  position = table_str.indexOf('info', position + 1);
}


if(track!=44 && track!=45){

  numRecom=numRecom/2;
  numElective=numElective/2;
  numLevel=numLevel/2;
}

//Editing the html to show the subjects
var modal_num = 0;
switch (track) {
  case 35:
    modal_num=2;
    break;
  case 36:
    modal_num=1;
    break;
  case 37:
    modal_num=3;
    break;
  case 38:
    modal_num=5;
    break;
  case 39:
    modal_num=4;
    break;
  case 40:
    modal_num=6;
    break;
  case 41:
    modal_num=7;
    break;
  case 42:
    modal_num=8;
    break;
  case 43:
    modal_num=9;
    break;
  case 44:
    modal_num=10;
    break;
  case 45:
    modal_num=11;
    break;
}
var i;
var count = 0;
for (i = 0; i < links.length; i++) {
  if (count < numRecom) {
    document.getElementById("recom-modal-"+modal_num).innerHTML += "<li>" + links[i] + "</li>";
  }
  if (count >= numRecom && count < (numRecom + numElective)) {
    document.getElementById("elec-modal-"+modal_num).innerHTML += "<li>" + links[i] + "</li>";
  }
  if (count >= (numRecom + numElective)) {
    document.getElementById("level-modal-"+modal_num).innerHTML += "<li>" + links[i] + "</li>";
  }
  count = count + 1;
}
