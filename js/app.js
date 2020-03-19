// console.log("Chess");

		

const game = {

		player1Turn: true,
		currentWhitePawn: null, 
		currentBlackPawn: null,
		currentSquare: null,
		occupiedSquares: [],
		whitePawns:[],
 		board:[],
		

		
		pushSpaces: function (){
			let spaces = document.querySelectorAll('.imageContainer')
			for( let i = 0; i<spaces.length; i++){
				spaces[i].id = (`space${i + 1}`)
				game.board.push(spaces[i])
			}
			console.log(game.board);
	},


		pushWhitePawns: function(){
			let whitePawns = document.querySelectorAll('.whitePawn')
			for( let i = 0; i< whitePawns.length; i++){
			 	whitePawns[i].id = (`whitePawn${i + 1}`)
				game.whitePawns.push(whitePawns[i])

			}


	},

		setBoard: function(){
			let file1Space1 = document.getElementById('space49')
			let file1Space2 = document.getElementById('space50')
			let file1Space3 = document.getElementById('space51')
			let file1Space4 = document.getElementById('space52')
			let file1Space5 = document.getElementById('space53')
			let file1Space6 = document.getElementById('space54')
			let file1Space7 = document.getElementById('space55')
			let file1Space8 = document.getElementById('space56')
			file1Space1.appendChild(game.whitePawns[0])
			file1Space2.appendChild(game.whitePawns[1])
			file1Space3.appendChild(game.whitePawns[2])
			file1Space4.appendChild(game.whitePawns[3])
			file1Space5.appendChild(game.whitePawns[4])
			file1Space6.appendChild(game.whitePawns[5])
			file1Space7.appendChild(game.whitePawns[6])
			file1Space8.appendChild(game.whitePawns[7])
		}
			
		


			






				
				



			
	
 	
		

		
		


 	



}
	
	
 	
	document.addEventListener('click', (event) => {
		if(event.target && event.target.id === "newGame")
			game.pushSpaces();
			game.pushWhitePawns();
			game.setBoard();
			
	})	


	document.addEventListener('dragstart', (event) => {
		if(event.target && event.target.classList.contains('pawnImage') ){
			game.currentWhitePawn = event.target
			game.currentWhitePawn.classList.add('grab')
			setTimeout(() => game.currentWhitePawn.className = ('dissapear') , 0)
			
			
		}
	})
		
	document.addEventListener('dragend', (event) => {
		if(event.target && event.target.classList.contains('dissapear')){
			game.currentWhitePawn.classList.add('pawnImage')
			game.currentWhitePawn.classList.remove('dissapear')
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
			
			
	
			
	
			
														
		

			
			

		
		
			
			
		
	









 
		 


















	

	





	

	


	
	




	





























