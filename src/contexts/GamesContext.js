import React, {createContext} from 'react'
import game1 from '../imgs/goldenjackpot.png'
import game2 from '../imgs/findtheball1.jpg'
import game3 from '../imgs/footballedition2.png'
import game4 from '../imgs/GADGETHUNT.jpg'
import game5 from '../imgs/xmas1front.jpg'
import game6 from '../imgs/SUREBANKER.png'
import game7 from '../imgs/JACKPOT1Kfront.png'

export const GamesContext = createContext();


const GamesContextProvider = (props) => {

    const games = [
        {id: 1, image: game1, title: 'golden jackpot', price: 1000.00, category: 1, isNew: true, topPrize: "N5,000,000", isVerOrient: true,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000 instantly!"},

        {id: 2, image: game2, title: 'find the ball', price: 4000.00, category: 2, isNew: true, topPrize: "N50,000", isVerOrient: false,
        desc: "Scratch only 1 box to reveal the ball, if you find the ball, you win N50,000 instantly!"},

        {id: 3, image: game3, title: 'football club search', price: 500.00, category: 2, isNew: false, topPrize: "N100,000", isVerOrient: false,
        desc: "Scratch only 3 balls to reveal the football clubs. If the clubs are the same, you win N100,000 instantly!"},

        {id: 4, image: game4, title: 'Gadget Hunt', price: 2000.00, category: 1, isNew: false, topPrize: "N500,000", isVerOrient: true,
        desc: "Scratch only four circles to reveal gadgets, If you have four matching gadgets you win!"},

        {id: 5, image: game5, title: 'Seasons Greetings', price: 2000.00, category: 3, isNew: false, topPrize: "1,000,000", isVerOrient: true,
        desc: "Scratch only three(3) Christmas tree balls & win any amount you find!"},

        {id: 6, image: game6, title: 'Sure Banker', price: 1000.00, category: 3, isNew: false, topPrize: "N50,000", isVerOrient: true,
        desc: "Scratch all the trophies to reveal all the winning numbers. Scratch only four(4) players' faces to reveal your numbers. if all your numbers match all the winning numbers you win!"},

        {id: 7, image: game7, title: 'Jackpot', price: 4000.00, category: 3, isNew: false, topPrize: "N500,000", isVerOrient: true,
        desc: "Scratch only 4 coin symbols to match the jackpot number, If they match you win #500,000 instantly!"},

    ]


    return (
        <GamesContext.Provider value={{ games }}>
            { props.children }
        </GamesContext.Provider>
    );
}

export default GamesContextProvider;
