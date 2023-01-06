import React from "react"



interface Props {
    questionNumber: number,
    question: any,
    callBack: (e: React.BaseSyntheticEvent, questionNumber: number) => void;
}

const SingleQuestion: React.FC<Props> = ({ questionNumber, question, callBack }) => {


    return (
        <>
            <div className='questionBox'>
                <div className="questionDiv">
                    <h6 className="quesHead">
                        {question.question}
                    </h6>
                </div>
                <div className="optionDiv">
                    {/* checking and rendering according to input type */}
                    {question.questiontype.toLowerCase() == "radio" ? <>
                        {question.questionoption.map((item: any) => {
                            return (
                                <>
                                    <div key={item.optionid} className="singleRadDiv">
                                        {question.answer ?
                                            <input type="radio" defaultChecked={question?.answer.length > 0 && item.optionvalue == question.answer ? true : false} name="radioBtn" id={item.optionvalue} onChange={(e) => callBack(e, questionNumber)} value={item.optionvalue} /> :
                                            <input type="radio" name="radioBtn" id={item.optionvalue} onChange={(e) => callBack(e, questionNumber)} value={item.optionvalue} />}

                                        <label className="labelCss" htmlFor={item.optionvalue}>{item.optionvalue}</label>
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
                                        <div className="singleRadDiv">
                                            {question.answer && question.answer.length > 0 ?
                                                <input type="checkbox" id={`check${item.optionid}`} name={`name${item.optionid}`}
                                                    onChange={(e) => callBack(e, questionNumber)} value={item.optionvalue}
                                                    defaultChecked={question.answer.includes(item.optionvalue) ? true : false}
                                                />
                                                : <input type="checkbox" id={`check${item.optionid}`} name={`name${item.optionid}`}
                                                    onChange={(e) => callBack(e, questionNumber)} value={item.optionvalue} />}
                                            <label className="labelCss" htmlFor={`check${item.optionid}`}>{item.optionvalue}</label>
                                        </div>
                                    )
                                })
                                }
                            </> : question.questiontype.toLowerCase() == "textarea" ?
                                <>
                                    <textarea id="textAreaQues"
                                        value={question?.answer?.length > 0 ? question.answer : ""}
                                        name="textAreaa" rows={4} cols={30} onChange={(e) => callBack(e, questionNumber)} />
                                </> : <>

                                    <input type="datetime-local" defaultValue={question?.answer?.length > 0 ? question.answer : ""} id="dateTime" name="dateTimeLocal" onChange={(e) => callBack(e, questionNumber)} />
                                </>
                    }
                </div>

            </div>
        </>
    )
}

export default SingleQuestion