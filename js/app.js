// console.log("Chess");

		

const game = {

		player1Turn: true,
		currentPawn: null, 
		currentSquare: null,
		occupiedSquares: [],
		whitePawns:[],
 		blackPawns:[],
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
				console.log(typeof game.whitePawns)
				game.whitePawns.push(whitePawns[i])
			}

	},

		pushBlackPawns: function(){
			let blackPawns = document.querySelectorAll('.blackPawn')
			for( let i = 0; i < blackPawns.length; i++){
			 	blackPawns[i].id = (`blackPawn${i + 1}`)
				console.log(typeof game.blackPawns)
				game.blackPawns.push(blackPawns[i])

			}


	},

		setBoard: function(){
			let row2Space1 = document.getElementById('space49')
			let row2Space2 = document.getElementById('space50')
			let row2Space3 = document.getElementById('space51')
			let row2Space4 = document.getElementById('space52')
			let row2Space5 = document.getElementById('space53')
			let row2Space6 = document.getElementById('space54')
			let row2Space7 = document.getElementById('space55')
			let row2Space8 = document.getElementById('space56')
			row2Space1.appendChild(game.whitePawns[0])
			row2Space2.appendChild(game.whitePawns[1])
			row2Space3.appendChild(game.whitePawns[2])
			row2Space4.appendChild(game.whitePawns[3])
			row2Space5.appendChild(game.whitePawns[4])
			row2Space6.appendChild(game.whitePawns[5])
			row2Space7.appendChild(game.whitePawns[6])
			row2Space8.appendChild(game.whitePawns[7])
			let row7Space1 = document.getElementById('space9')
			let row7Space2 = document.getElementById('space10')
			let row7Space3 = document.getElementById('space11')
			let row7Space4 = document.getElementById('space12')
			let row7Space5 = document.getElementById('space13')
			let row7Space6 = document.getElementById('space14')
			let row7Space7 = document.getElementById('space15')
			let row7Space8 = document.getElementById('space16')
			row7Space1.appendChild(game.blackPawns[0])
			row7Space2.appendChild(game.blackPawns[1])
			row7Space3.appendChild(game.blackPawns[2])
			row7Space4.appendChild(game.blackPawns[3])
			row7Space5.appendChild(game.blackPawns[4])
			row7Space6.appendChild(game.blackPawns[5])
			row7Space7.appendChild(game.blackPawns[6])
			row7Space8.appendChild(game.blackPawns[7])
			
		},

		captureWhite: function(){
			console.log('caputured white')

		},
		
		captureBlack: function (){
			console.log('captured black')


		},
		
			Winner: function (){
			console.log('youwin');
		},

	}





	
			
	

 	let gameReset = document.getElementById('newGame') 
	gameReset.addEventListener('click', (event) => {
			game.pushSpaces();
			game.pushWhitePawns();
			game.pushBlackPawns();
			game.setBoard();
			console.log('DORK')
	})	
	

	document.addEventListener('dragstart', (event) => {
		if(event.target && event.target.classList.contains('pawnImage')){
			game.currentPawn = event.target 
			console.log(`dragstart pawn: ${game.currentPawn}`);
		}
	})

		
	document.addEventListener('dragend', (event) => {
		if(event.target && event.target.classList.contains('pawnImage')){
			game.currentPawn.classList.remove('dissapear')
			game.currentPawn.classList.add('pawnImage')

		}
	})


	document.addEventListener('dragover', (event) => { 
		if(event.target && event.target.classList.contains('imageContainer')) {
			event.preventDefault()
			game.currentSquare = event.target
			console.log(`dragover square: ${event.target}`)
			
		}
	})
		

	
	document.addEventListener('dragenter' ,(event) => {		
		if(event.target && event.target.classList.contains('imageContainer')){
			event.preventDefault();
			// console.log("inside an image container");
			game.currentSquare = event.target
			// game.currentSquare.classList.add('hovered');
			// console.log("game.currentSquare in dragEnter, should contain hovered", game.currentSquare)			
		}
	})
	
	document.addEventListener('dragleave',(event) => {
		if(event.target && event.target.classList.contains('imageContainer')){
			
			
		}
	})
			
	document.addEventListener('drop', (event) => {
		// console.log("here is event.target in drop", event.target);
		if (event.target.classList.contains('imageContainer')){
				event.preventDefault();
				console.log(game.currentSquare)
				console.log(`drop pawn: ${game.currentPawn}`)
				game.currentSquare.appendChild(game.currentPawn)
		if (game.currentPawn.classList.contains('whitePawn') && event.target.classList.contains('blackPawn')){
				game.captureWhite();
		}
		if (game.currentPawn.classList.contains('blackPawn') && event.target.classList.contains('whitePawn')){
				game.captureBlack();
		}
		if (game.currentPawn.classList.contains('whitePawn') && event.target.classList.contains('whiteWinner')){
				game.Winner();
		}
		if (game.currentPawn.classList.contains('blackPawn') && event.target.classList.contains('blackWinner')){
				game.Winner();
		}
	}
})

				











			



			
		


			






				
				



			
	
 	
		

		
		


 	



	
	
			
		
			
			



			
		
			

			
			
	
			
	
			
														
		

			
			

		
		
			
			
		
	









 
		 


















	

	





	

	


	
	




	





























