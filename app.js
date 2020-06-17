

function enviar(){
	let nome = document.getElementById('name').value
	alert('Thanks for the message, ' + nome)
}

function readMore(el1, el2) {
        
        
            document.getElementById(el1).style.display = 'none';
        
            document.getElementById(el2).style.display = 'block';
    }


function someImagem(el){
	var width = screen.width;
	if(width < 1000){
		document.getElementById(el).style.display = 'none';
	}
	else{
		document.getElementById(el).style.display = 'block';
	}
	
}