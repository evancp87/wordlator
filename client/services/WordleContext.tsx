import { createContext} from 'react';

export interface WordleContextValue {

isStarted: boolean;
words: Array<string> | undefined,
board: [
    [{letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}],
    [{letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}],
    [{letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}],
    [{letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}],
    [{letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}],
    [{letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}, {letter: string, status: string}]
],
currentRow: number,
currentWord: string,
currentGuess: string,
error: string,
gameOver: boolean,

}



export const WordleContext = createContext<WordleContextValue>(
{ 
isStarted: false,
words: [],
board: [
    [{letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}],
    [{letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}],
    [{letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}],
    [{letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}],
    [{letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}],
    [{letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}, {letter: "", status: "white"}]
],
currentRow: 0,
currentWord: "",
currentGuess: "",
error: String.fromCharCode(160),
gameOver: false});



