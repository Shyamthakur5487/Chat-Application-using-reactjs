import Board from './board';
import Info from "./info";
  
// Importing the CSS File
import styled from "styled-components";
  
// Importing the useState hook
import { useState } from 'react';



function App() {
    // Creating a reset state, which indicates whether 
    // the game should be reset or not
    const [reset, setReset] = useState(false);
  
    // Creating a winner state, which indicates
    // the current winner
    const [winner, setWinner] = useState('');
  
    // Sets the reset property to true
    // which starts the chain 
    // reaction of resetting the board
    const resetBoard = () => {
        setReset(true);
    }
  
    return (
        <>
        <Container>
		<Button>Back</Button>
        <div className="App">
            {/* Shrinks the popup when there is no winner */}
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
			
            {/* Custom made board component comprising of 
            the tic-tac-toe board  */}
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info />
        </div>
        </Container>
        </>
    );
}
const Container = styled.div`

 @import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');

 .App{
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5vh;
	backdrop-filter: 5px;
	background-color: #101010;
 }

 .winner {
	transition: all ease-in .3s;
	display: flex;
	opacity: 1;
	font-size: 1.5rem;
	font-weight: 600;
	gap: 1vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20vw;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -70%);
	background-color: rgba(195, 141, 158, 0.863);
	backdrop-filter: 5px;
	padding: .5rem;
	padding-bottom: 1rem;
	border-radius: 10%;
 }

 .winner-text{
	padding: .3em 1em .25em;	
	font-weight: 600;
	font-size: 2.5rem;
	color: white;
	font-family: 'Bellefair', serif;
	position:relative;
	text-align: center;
	line-height:1.3;
 }

 .shrink {
	transform: scale(.1);
	opacity: 0;
 }
 button {
	background-color: #111827;
	border: 1px solid transparent;
	border-radius: .75rem;
	box-sizing: border-box;
	color: #FFFFFF;
	cursor: pointer;
	flex: 0 0 auto;
	font-family: "Inter var";
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.5rem;
	padding: .75rem 1.2rem;
	text-align: center;
	text-decoration: none #6B7280 solid;
	text-decoration-thickness: auto;
	transition-duration: .2s;
	transition-property: background-color, border-color,
	color, fill, stroke;
	transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	width: auto;
 }

 button:hover {
	background-color: #374151;
 }

 button:focus {
	box-shadow: none;
	outline: 2px solid transparent;
	outline-offset: 2px;
 }

 @media (min-width: 768px) {
	button {
	padding: .75rem 1.5rem;
	}
 };
`;

const Button = styled.div`
	background-color: #111827;
	border: 1px solid transparent;
	box-sizing: border-box;
	color: #FFFFFF;
	cursor: pointer;
	flex: 0 0 auto;
	font-family: "Inter var";
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.5rem;
	padding: .75rem 1.2rem;
	text-align: center;
	text-decoration: none #6B7280 solid;
	text-decoration-thickness: auto;
	transition-duration: .2s;
	transition-property: background-color, border-color,
	color, fill, stroke;
	transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	width: auto;

 Button:hover {
	background-color: #374151;
 }

 Button:focus {
	box-shadow: none;
	outline: 2px solid transparent;
	outline-offset: 2px;
 }


`;
export default App;