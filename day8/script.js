window.onload = function() {
  const canvas = document.querySelector('canvas');
  const paddingEq = 50;
  canvas.height=window.innerHeight-paddingEq;
  canvas.width=window.innerWidth-paddingEq;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(244,244,244,0.9)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.stroke();

  var isDrawing="false";

  function drawRect(xC,yC) {
    ctx.fillStyle="rgba(110,220,110,0.6)"; //plus some randomness
    if (isDrawing) { ctx.fillRect(xC,yC,10,10);}
  }

  function clearCanvas() { ctx.clearRect(0,0,canvas.width,canvas.height); }

  function randomRGBA(trans=1.0) { //Math.random()*(max-min)+min
    return 'rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+trans+')';
  }

  function picGen() {
    var cvs = document.querySelector('canvas.drawing');
    return cvs.toDataURL("image/png");
  }

  //Create a picture button
  document.querySelector('#picMe').addEventListener('click',function(){window.open(picGen())});
  //IMGUR button
  document.querySelector('#imGrr').addEventListener('click',function(){uploadToImgur(picGen());});
  //CLEAR button
  document.querySelector('#clear').addEventListener('click',()=>clearCanvas());

/* SAMPLE SUCCESSFUL UPLOAD DATA
{"data":{"id":"EGJLNkj","title":null,"description":null,"datetime":1483570254,"type":"image\/png",
"animated":false,"width":899,"height":614,"size":67075,"views":0,"bandwidth":0,"vote":null,"favorite":false,
"nsfw":null,"section":null,"account_url":null,"account_id":0,"is_ad":false,"in_gallery":false,"deletehash":"5WfDva4fpV5m2eD",
"name":"","link":"http:\/\/i.imgur.com\/EGJLNkj.png"},"success":true,"status":200}
*/
function uploadToImgur(picData) {
  var picPrepped = picData.split(",")[1]; //must remove the "data:image/png;base64,[IMAGE DATA HERE]" preceding image data
  var xhr = new XMLHttpRequest(),
  method = "POST",
  url = 'https://api.imgur.com/3/image';
  xhr.open(method, url, true);
  xhr.setRequestHeader('Authorization','Client-ID '+CLIENT_ID); //Authorization: Client-ID YOUR_CLIENT_ID
  xhr.onload = function() {
    //if (xhr.readyState===4 && xhr.status===200) { // all done SHOULD I USE onreadystatechange or not!?!?!?!
      const r = JSON.parse(xhr.responseText);
      console.log(r.data.link+" deleteHash: "+r.data.deletehash);
      window.open(r.data.link);
    //}
  }
  xhr.send(picPrepped);
}

function deleteFromImgur(deleteHash) { //{"data":true,"success":true,"status":200}
  const endpoint='https://api.imgur.com/3/image/'+deleteHash; //https://api.imgur.com/endpoints/image#image-delete
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE",endpoint,true); //async true can use 4 & 5 for Oauth2
  xhr.setRequestHeader('Authorization','Client-ID '+CLIENT_ID); //Authorization: Client-ID YOUR_CLIENT_ID
  xhr.onload = function() {
    const r=JSON.parse(xhr.responseText);
    (r.success&&r.status===200) ? console.log("Successfully deleted") : console.err("Failure! "+r);
    }
  xhr.send();
}

//deleteFromImgur('AiU9UumFcFbHiQY');

/*THIS FUNCTION IS NICE*/
  function drawCirc(xC,yC) {
    ctx.beginPath();
    ctx.fillStyle=randomRGBA(); //"rgba(110,220,110,0.6)";
    ctx.arc(xC,yC,Math.floor(Math.random()*20)+10,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
  }

  canvas.addEventListener('mousemove',mouseTrack);
  canvas.addEventListener('mousedown',mouseDown);
  canvas.addEventListener('mouseup',mouseDown);

  function mouseTrack(e) { (isDrawing===true) ? drawCirc((e.layerX),(e.layerY)) : 0; }
  function mouseDown(e) {
    (e.type==='mouseup') ? isDrawing = false : 0;
    (e.type==='mousedown') ? isDrawing = true : 0;
  }
}
