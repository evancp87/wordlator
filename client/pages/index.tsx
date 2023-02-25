import type { NextPage } from 'next'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {theme} from "../theme";
import Game from "./Game";
import {WordleProvider} from "../services/WordleState";
import React, {useContext, useState} from  "react";
import { Normalize } from 'styled-normalize'
import Nav from  "../components/Nav";

const GlobalStyle =createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;
const Home: NextPage = () => {
  const [words, setWords] = useState([]);
const [word, setWord] = useState("");
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

 const downloadDictionary: Function = async () => {

  let response = await fetch("words.txt");

  if (response.status !== 200 ) {

    throw new Error("couldn't find words")
  }
  let data = await response.text();
  let wordList = data.split("\n");
  let maxWord = data.length;

//   let randomWord  = getRandomInt(0,maxWord);
// setWords(wordList)
//   setWord(wordList[randomWord]);


  // length, data formate

 }
  return (
      <ThemeProvider theme={theme}>
        <WordleProvider>
          <GlobalStyle/>
          <Normalize/>
          <Nav/>
        <Game/>
        </WordleProvider>
        </ThemeProvider>
  )
}

export default Home
