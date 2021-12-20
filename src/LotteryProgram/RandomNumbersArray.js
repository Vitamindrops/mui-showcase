import { useEffect, useState } from "react"

function RandomNumbersArray({winningNumbers, showIndex}) {

    const [userNumbers, setUserNumbers] = useState([])

    function generateArrayOfNumbers(count) {
        let lottery = []
        for (var i = 1; i <= count; i++) {
            lottery.push(i);
        }
        return lottery
    }

    function generateRandomNumber(totalNumbers, totalNumbersArray) {
        const randomNumberIndex = Math.floor(Math.random() * totalNumbers + 1);
        return totalNumbersArray[randomNumberIndex - 1];
    }

    function generateNumbersArray(count) {
        let numbersToChooseFrom = generateArrayOfNumbers(50);
        const totalNumbers = generateArrayOfNumbers(7);
        let drawnNumbers = []
        totalNumbers?.forEach((num) => {
            // Make sure to remove existing numbers from pool of numbers to draw from
            const newNumbersToChooseFrom = numbersToChooseFrom.filter(num => !drawnNumbers?.includes(num))
            drawnNumbers.push(generateRandomNumber(newNumbersToChooseFrom.length,  newNumbersToChooseFrom))
        });
        const sortedNumArray = sortNumbers(drawnNumbers);
        return sortedNumArray;
    }

    function generateRandomUserNumbers() {
        const lottery = generateArrayOfNumbers(5)
        const randomLotteryNumbers = lottery?.map((number) => {
            console.log(generateNumbersArray(7))
            return generateNumbersArray(40)
        })
        return randomLotteryNumbers
    }

    function sortNumbers(numbers) {
        return numbers.sort((a, b) => a - b);
    }

    useEffect(() => {
        const userGeneratedNumbers = generateRandomUserNumbers()
        setUserNumbers(userGeneratedNumbers)
        console.log(userGeneratedNumbers)
    }, [])


    function isCorrect(number, index) {
        console.log(winningNumbers[showIndex-1], ">", number)
        return winningNumbers?.includes(number) && canShowNumber(number)
    }

    function canShowNumber(number) {
        return winningNumbers[showIndex] > number || showIndex === 7
    }

    function getCorrectCount(numbers) {
        const correctCount = numbers?.filter(num => winningNumbers?.includes(num))
        return showIndex === 7 ? correctCount?.length : 0
    }

    return (
        <div>
            <h2 className="text-center">Your numbers</h2>
            {userNumbers?.map((row, index) => {
                return (
                    <div key={index} className="colRed">
                        {row?.map((num, index) => {
                            return (
                                <div className='colBlueBalls' key={index}>
                                    <div 
                                        className={`bg-${isCorrect(num, index) ? "success" : "danger"} lotteryBall`}
                                    >
                                        <div className='ballNum'>{num}</div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="colBlack">
                            <div> {getCorrectCount(row)} / 7 </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default RandomNumbersArray