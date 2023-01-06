import React, { useContext, useState } from "react"
import { QuestionContext } from "../context/QuestionContext"
import SingleQuestion from "./SingleQuestion"


const QuestionCard = () => {

    const questions = useContext(QuestionContext)


    // All useStates
    const [totalQues, setTotalQues] = useState(questions.questions)
    const [startPage, setStartPage] = useState<boolean>(true);
    const [number, setNumber] = useState(0);
    const [endGame, setEndGame] = useState<boolean>(false)



    console.log(totalQues, "totalQues", endGame)


    // All Functions
    const startQues = () => {
        setStartPage(false)
        setNumber(1)
    }

    const nextQuestion = () => {

        if (number < totalQues.length) {

            setNumber(number + 1)
        } else {
            setEndGame(true)
        }

    }

    const prevQuestion = () => {
        if (number > 1) {
            setNumber(number - 1)
        }


    }
    const updateAns = (e: any, questionNumber: number) => {
        if (!endGame) {
            let temp = [...totalQues]
            let index = questionNumber - 1
            let tempObj: any = temp[index]
            tempObj.answer = e.target.value
            temp.splice(index, 1, tempObj)
            setTotalQues(temp)

            console.log("update", e.target.value, questionNumber, temp)

        }
    }



    return (
        <>
            <div className='card'>
                <div className="backBtn">
                    <i className="fa fa-arrow-left" style={{ fontSize: "24px", cursor: "pointer" }} />
                </div>
                <div className="centerCss">
                    {
                        startPage && <><h1 className="heading">Lets Start</h1>
                            <button className='btnCss btnStart' onClick={() => startQues()} >
                                Start
                            </button></>
                    }
                    {!startPage && <>
                        <>
                            {
                                totalQues && Object.keys(totalQues).length > 0 &&
                                <SingleQuestion
                                    questionNumber={number}
                                    question={totalQues[number - 1]}
                                    callBack={updateAns}
                                />
                            }
                        </>
                        <>
                            <div className="btnGrp">
                                <button className='btnCss prevBtn' onClick={prevQuestion}>
                                    Previous
                                </button>
                                {number == totalQues.length ? <button className='btnCss nextBtn' onClick={nextQuestion}>
                                    Submit
                                </button> : <button className='btnCss nextBtn' onClick={nextQuestion}>
                                    Next
                                </button>}
                            </div>
                        </>
                    </>
                    }


                </div>
            </div >
        </>
    )
}

export default QuestionCard