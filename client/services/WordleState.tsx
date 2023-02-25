import { createContext, useState} from 'react';
// import {WordleContext, WordleContextValue} from "./WordleContext";
import {WordleContext, WordleContextValue} from "./WordleContext";

type WordleContextProps = {
    children: React.ReactNode
}


export function WordleProvider ({children}: WordleContextProps) {
    const [gameState, setGameState] = useState<WordleContextValue>({
        
        isStarted: false,
        words: [],
        board:[
            [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
            [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
            [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
            [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
            [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
            [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}]
            ],
        currentRow: 0,
        currentWord: "",
        currentGuess: "",
        error: String.fromCharCode(160),
        gameOver: false,
      });
    return (
        <WordleContext.Provider value={{gameState, setGameState}}>
            {children}
        </WordleContext.Provider>
    )
}


