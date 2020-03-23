// console.log("Chess");

		

const game = {

    player1Turn: true,
    currentPawn: null,
    whitePawns: [],
    blackPawns: [],
    board: [],
    capturedBlackPeices: null,
    captureWhitePeices: null,





    pushSpaces: function() {
        let spaces = document.querySelectorAll('.imageContainer')
        for (let i = 0; i < spaces.length; i++) {
            spaces[i].id = (`space${i + 1}`)
            game.board.push(spaces[i])
        }
        console.log(game.board);
    },


    pushWhitePawns: function() {
        let whitePawns = document.querySelectorAll('.whitePawn')
        for (let i = 0; i < whitePawns.length; i++) {
            whitePawns[i].id = (`whitePawn${i + 1}`)
            game.whitePawns.push(whitePawns[i])
        }
    },


            
    pushBlackPawns: function() {
        let blackPawns = document.querySelectorAll('.blackPawn')
        for (let i = 0; i < blackPawns.length; i++) {
            blackPawns[i].id = (`blackPawn${i + 1}`)
            console.log(typeof game.blackPawns)
            game.blackPawns.push(blackPawns[i])

        }


    },

    setBoard: function() {
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
        game.player1Turn = true 
        game.blackPawns.draggable = 'false'
        game.indicatePlayerTurn();


    },

    indicatePlayerTurn: function (){
        let indicator = document.createElement('div')
        
        let docBody = document.querySelector('body')
        let whitePawn = document.querySelectorAll('.whitePawn')
        let blackPawn = document.querySelectorAll('.blakcPawn')
        if (game.player1Turn === true){
            blackPawn.draggable = 'false' 
            indicator.innerText = 'The Virus is Attacking'
            indicator.remove();
            docBody.appendChild(indicator)
        }
        if (game.player1Turn !== true){
            whitePawn.draggable = 'false' 
            indicator.innerText = 'The Soap is Attacking'
            docBody.appendChild(indicator)
            
        }

    },

            
    emptyArray: function (){
        game.board = []
        capturedBlackPeices = null
        captureWhitePeices = null 
        player1Turn = true

    },



    

    captureBlack: function (){
    console.log('captured black')


    },

    winner: function() {
        if(game.currentPawn.classList.contains('blackPawn')){
            alert('Congrats Soap. You have given us all hope we may again be rid of covid')
        }
        if(game.currentPawn.classList.contains('whitePawn')){
            alert('Congrats Covid, you kept us inside foreverrrrrrr......')
        }
    },




    

}



let player1met = document.querySelector('.playerOneMet')

let board = document.querySelector('.board')
console.log(board);


let gameReset = document.getElementById('newGame')
gameReset.addEventListener('click', (event) => {
    game.pushSpaces();
    game.pushWhitePawns();
    game.pushBlackPawns();
    game.setBoard();
    game.emptyArray();
    console.log('DORK')
})



document.querySelectorAll('.blackPawn').forEach (item => {
    item.addEventListener('dragstart', event => {
        console.log('listenerWorking')
        game.currentPawn = event.target
    })


})

document.querySelectorAll('.blackPawn').forEach (item => {
    item.addEventListener('dragend', event => {
        console.log('listener Working')
        game.currentPawn = event.target
    })

})



document.querySelectorAll('.whitePawn').forEach (item => {
    item.addEventListener('dragstart', event => {
        console.log('listener Working')
        game.currentPawn = event.target
    })

})

    document.querySelectorAll('.whitePawn').forEach (item => {
    item.addEventListener('dragend', event => {
        console.log('listenerWorking')
        game.currentPawn = event.target
    })


})
 

document.querySelectorAll('.imageContainer').forEach (item => {
    item.addEventListener('dragover', event => {
        event.preventDefault();
        game.currentSquare = event.target
    })
})


document.querySelectorAll('.imageContainer').forEach (item => {
    item.addEventListener('dragenter', event => {
        event.preventDefault();
        game.currentSquare = event.target
    })
})

document.querySelectorAll('.imageContainer').forEach (item => {
    item.addEventListener('dragleave', event => {
        game.currentSquare = event.target
        
    })
})

document.querySelectorAll('.imageContainer').forEach (item => {
    item.addEventListener('drop', event => {
        event.preventDefault();
        game.currentSquare = event.target
        if(game.currentSquare.classList.contains('blackWinner') && game.currentPawn.classList.contains('blackPawn')){
            game.winner()
        }
        if(game.currentSquare.classList.contains('whiteWinner') && game.currentPawn.classList.contains('whitePawn')){
            game.winner()
        }
        game.currentSquare.appendChild(game.currentPawn)
        if(game.currentPawn.classList.contains('whitePawn')){
            game.player1Turn = false 
            game.indicatePlayerTurn();
        }
        if(game.currentPawn.classList.contains('blackPawn')){
            game.player1Turn = true 
            game.indicatePlayerTurn();
        }
        
        })
    })





document.querySelectorAll('.blackPawn').forEach (item => {
    item.addEventListener('dragover', event => {
        event.preventDefault();
        game.attackedPawn = event.target
    })
})


document.querySelectorAll('.blackPawn').forEach (item => {
    item.addEventListener('dragenter', event => {
        event.preventDefault();
        game.attackedPawn = event.target
    })
})

document.querySelectorAll('.blackPawn').forEach (item => {
    item.addEventListener('dragleave', event => {
        game.attackedPawn = event.target
        
    })
})

document.querySelectorAll('.blackPawn').forEach (item => {
    item.addEventListener('drop', event => {
        event.preventDefault();
        game.capturedBlackPeices = event.target
        game.capturedBlackPeices.remove()
        game.currentSquare = event.currentTarget
        game.currentSquare.appendChild(game.currentPawn)
        player1met.appendChild(game.capturedBlackPeices)
        game.player1Turn = false
        game.indicatePlayerTurn();
    })  
})

document.querySelectorAll('.whitePawn').forEach (item => {
    item.addEventListener('dragover', event => {
        event.preventDefault();
        game.attackedPawn = event.target
    })
})


document.querySelectorAll('.whitePawn').forEach (item => {
    item.addEventListener('dragenter', event => {
        event.preventDefault();
        game.attackedPawn = event.target
    })
})

document.querySelectorAll('.whitePawn').forEach (item => {
    item.addEventListener('dragleave', event => {
        game.attackedPawn = event.target
        
    })
})

document.querySelectorAll('.whitePawn').forEach (item => {
    item.addEventListener('drop', event => {
        event.preventDefault();
        game.capturedWhitePeices = event.target
        game.capturedWhitePeices.remove()
        game.currentSquare = event.currentTarget
        game.currentSquare.appendChild(game.currentPawn)
        player1met.appendChild(game.capturedWhitePeices)
        game.player1Turn = true 
    })  
})




			






				
				



			
	
 	
		

		
		


 	



	
	
			
		
			
			



			
		
			

			
			
	
			
	
			
														
		

			
			

		
		
			
			
		
	









 
		 


















	

	





	

	


	
	




	





























