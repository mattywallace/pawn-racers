// console.log("Chess");

		

const game = {

		player1Turn: true,
		currentWhitePawn: null, 
		currentBlackPawn: null,
		currentSquare: null,
		occupiedSquares: [],

 	


	
 	
		

		
		


 	



}
	
	
 	
		


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
		if(event.target && event.target.className === 'imageContainer'){
			event.preventDefault()
			game.currentSquare = event.target
			
		}
	})
		

	
	document.addEventListener('dragenter' ,(event) => {
		if(event.target && event.target.className === 'imageContainer'){
			event.preventDefault();
			game.currentSquare = event.target
			game.currentSquare.className += ' hovered'
			console.log(game.currentSquare.className)			
		}
	})
	
	document.addEventListener('dragleave',(event) => {
		if(event.target && event.target.className === 'imageContainer hovered'){
			game.currentSquare.className = 'imageContainer' 
			console.log(game.currentSquare.className)
			
		}
	})
			
	document.addEventListener('drop', (event) => {
		if(event.target && event.target.className === 'imageContainer'){
			console.log(game.currentSquare)
			game.currentSquare.appendChild(game.currentWhitePawn)
		}
	})
			
			
	
			
	
			
														
		

			
			

		
		
			
			
		
	









 
		 


















	

	





	

	


	
	




	





























