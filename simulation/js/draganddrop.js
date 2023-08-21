var count=0;
var id;
var l=[];
var len;
	function dragStart(ev) {
            ev.dataTransfer.effectAllowed='move';
            ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
            ev.dataTransfer.setDragImage(ev.target,0,0);
			document.getElementById("5").style.border="1px solid black";
			document.getElementById("6").style.border="1px solid black";
			document.getElementById("7").style.border="1px solid black";
			id=parseInt(ev.target.id);
			if(!(l.includes(id)))
			l.push(id);
			len=l.length;
			console.log(len);
            return true;
    }
	function drop(event) {
		
			var flag=0; 
			var div_id=id+10;
			if((id+5)==parseInt(event.target.id)) {
				event.preventDefault();
				var data = event.dataTransfer.getData("Text");
				event.target.appendChild(document.getElementById(data));
				document.getElementById(div_id).remove();
            count++;
			}
			
			else {
				Swal.fire({
					backdrop:false,
				   target: '#exp',
				   position:'center',
					customClass: {
					  container: 'position-absolute',
					  popup:"swal2-popup"
					},
					title:'Please try again!!',
					html: 'Incorrrect placement.\n To know the right box please click on <b style="color:#2B4D9D">INSTRUCTIONS</b>.',
				   icon:'error'
					});len=len-1;}
			for(var i=5;i<=7;i++){
				document.getElementById(i).style.removeProperty('border');
			}

			if(count==2) {
				document.getElementById('1').style.cursor="move";
				document.getElementById('1').draggable=true;
			}

	
			if(count==3) {
				Swal.fire({
					backdrop:false,
				   target: '#exp',
				   position:'center',
					customClass: {
					  container: 'position-absolute',
					  popup:"swal2-popup"
					},
					title:'Done',
					html: 'Now click on <b style="color:#2B4D9D">START</b> button.',
				   icon:'success'
					});
				document.getElementById('s').innerHTML="";
				document.getElementById('s').style.height='90px';
				document.getElementById("st").style.cursor="pointer";
				document.getElementById("st").disabled=false;
			}
			
	}
	function allowDrop(event) {
			event.preventDefault();
	}
	