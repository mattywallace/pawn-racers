// console.log("Chess");

		

const game = {

		player1Turn: true,
		currentWhitePawn: null, 
		currentBlackPawn: null,
		currentSquare: null,
		occupiedSquares: [],

 	

		newGame: function (){
			//game.pla
		}
	
 	
		

		
		


 	



}
	
	
 	
	document.addEventListener('click', () => {
		if(event.targetr && event.target.id === "newGame")
			game.newGame();
	})	


	document.addEventListener('dragstart', (event) => {
		if(event.target && event.target.className === 'pawnImage'){
			game.currentWhitePawn = event.target
			game.currentWhitePawn.className += (' grab');
			setTimeout(() => game.currentWhitePawn.className = ('dissapear') , 0)
			
			
		}
	})
		
	document.addEventListener('dragend', (event) => {
		if(event.target && event.target.className === 'dissapear'){
			game.currentWhitePawn.className = ('pawnImage')
		}
	})




	document.addEventListener('dragover', (event) => { 
		if(event.target && event.target.classList.contains('imageContainer')) {
			event.preventDefault()
			//game.currentSquare = event.target
			
		}
	})
		

	
	document.addEventListener('dragenter' ,(event) => {		
		if(event.target && event.target.classList.contains('imageContainer')){
			console.log("inside an image container");
			event.preventDefault();
			game.currentSquare = event.target
			game.currentSquare.classList.add('hovered');
			console.log("game.currentSquare in dragEnter, should contain hovered", game.currentSquare)			
		}
	})
	
	document.addEventListener('dragleave',(event) => {
		if(event.target && event.target.classList.contains('hovered')){
			game.currentSquare.classList.remove('hovered')
			console.log("in dragleave, hovered should be removed", game.currentSquare)
			
		}
	})
			
	document.addEventListener('drop', (event) => {
		console.log("here is event.target in drop", event.target);
		if(event.target && event.target.classList.contains('imageContainer')){
			console.log(game.currentSquare)
			game.currentSquare.appendChild(game.currentWhitePawn)
		}
	})
			
			
	
			
	
			
														
		

			
			

		
		
			
			
		
	









 
		 


















	

	





	

	


	
	




	





























