import React, { useContext, useState } from "react"
import { QuestionContext } from "../context/QuestionContext"


interface Props {
    questionNumber: number,
    question: any,
    callBack: (e: React.BaseSyntheticEvent, questionNumber: number) => void;
}

const SingleQuestion: React.FC<Props> = ({ questionNumber, question, callBack }) => {

    // console.log(questionNumber, typeof question, "props")

    // All useStates
    // const [startPage, setStartPage] = useState<boolean>(true);





    // All Functions




    return (
        <>
            <div className='questionBox'>
                <div className="questionDiv">
                    <h6 className="quesHead">
                        {question.question}
                    </h6>
                </div>
                <div className="optionDiv">
                    {question.questiontype.toLowerCase() == "radio" ? <>
                        {question.questionoption.map((item: any) => {
                            return (
                                <>
                                    <div className="singleRadDiv">
                                        <input type="radio" name="radioBtn" onChange={(e) => callBack(e, questionNumber)} value={item.optionvalue} />
                                        <label htmlFor="radioBtn">{item.optionvalue}</label>
                                    </div>
                                </>
                            )
                        })

                        }
                    </>
                        : question.questiontype.toLowerCase() == "checkbox" ?
                            <>
                                {question.questionoption.map((item: any) => {
                                    return (
                                        <>
                                            <input type="checkbox" id={`check${item.optionid}`} name={item.optionvalue} value={item.optionvalue} onChange={(e) => callBack(e, questionNumber)} />
                                            <label htmlFor={item.optionvalue}>{item.optionvalue}</label>
                                        </>
                                    )
                                })
                                }
                            </> : question.questiontype.toLowerCase() == "textarea" ?
                                <>TextArea
                                    <textarea id="textAreaQues" name="textAreaa" rows={4} cols={50} onChange={(e) => callBack(e, questionNumber)}></textarea>
                                </> : <>
                                    <input type="datetime-local" id="dateTime" name="dateTimeLocal" onChange={(e) => callBack(e, questionNumber)} />
                                    Date</>
                    }
                </div>

            </div>
        </>
    )
}

export default SingleQuestion