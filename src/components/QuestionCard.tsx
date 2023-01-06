import React, { useContext, useState } from "react"
import { QuestionContext } from "../context/QuestionContext"
import DisplayAns from "./DisplayAns"
import SingleQuestion from "./SingleQuestion"


const QuestionCard = () => {
    // fetching data from context
    const questions = useContext(QuestionContext)


    // All useStates
    const [totalQues, setTotalQues] = useState(questions.questions)
    const [startPage, setStartPage] = useState<boolean>(true);
    const [number, setNumber] = useState(0);
    const [endGame, setEndGame] = useState<boolean>(false)

    // All Functions

    // func when start clicked
    const startQues = () => {
        setStartPage(false)
        setNumber(1)
        setTotalQues(questions.questions)
        setEndGame(false)
    }

    // func when next button clicked
    const nextQuestion = () => {
        if (number < totalQues.length) {

            setNumber(number + 1)
        } else {
            setEndGame(true)
        }
    }

    // Submit func
    const submitFunc = () => {
        setEndGame(true)
    }

    // when previous button clicked
    const prevQuestion = () => {
        if (number > 1) {
            setNumber(number - 1)
        }


    }

    const backBtnFunc = () => {
        setStartPage(true)
        setTotalQues(questions.questions)
        setNumber(0)
        setEndGame(false)
    }

    // when answer is changes this func runs
    const updateAns = (e: any, questionNumber: number) => {

        if (!endGame) {
            // check wheter its checkbox event 
            if (e.target.type == "checkbox") {
                let temp = [...totalQues]
                let index = questionNumber - 1
                let tempObj: any = temp[index]
                if (!tempObj.answer) {
                    tempObj.answer = []
                }

                if (e.target.checked) {
                    tempObj.answer.push(e.target.value)
                } else {
                    if (tempObj.answer.length > 0) {
                        let tempArr = tempObj.answer.map((str: string) => {
                            if (str !== e.target.value) {
                                return str
                            }
                        })

                        // to remove undefined element from array
                        tempArr = tempArr.filter(function (element: any) {
                            return element !== undefined;
                        });
                        tempObj.answer = tempArr

                    }
                }
                // splicing to replace object
                temp.splice(index, 1, tempObj)
                setTotalQues(temp)


            } else {
                let temp = [...totalQues]
                let index = questionNumber - 1
                let tempObj: any = temp[index]
                tempObj.answer = e.target.value

                // splicing to replace object
                temp.splice(index, 1, tempObj)
                setTotalQues(temp)
            }

        }
    }



    return (
        <>
            {/* Routing can be used in this project but not used */}
            <div className='card'>
                {!startPage && !endGame && <div className="backBtn" >
                    <i className="fa fa-arrow-left" onClick={backBtnFunc} style={{ fontSize: "24px", cursor: "pointer" }} />
                </div>}
                <div className="centerCss">
                    {/* Start Page */}
                    {
                        startPage && !endGame && <><h1 className="heading">Lets Start</h1>
                            <button className='btnCss btnStart' onClick={() => startQues()} >
                                Start
                            </button></>
                    }

                    {/* Question Page */}
                    {!startPage && !endGame && <>
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
                                {number == totalQues.length ? <button className='btnCss nextBtn' onClick={submitFunc}>
                                    Submit
                                </button> : <button className='btnCss nextBtn' onClick={nextQuestion}>
                                    Next
                                </button>}
                            </div>
                        </>
                    </>
                    }
                    {/* Submit Page */}
                    {endGame && <>
                        <DisplayAns
                            totalQues={totalQues}
                        />
                    </>

                    }


                </div>
            </div >
        </>
    )
}

export default QuestionCard