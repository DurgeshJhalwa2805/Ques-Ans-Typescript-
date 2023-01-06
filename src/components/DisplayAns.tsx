
interface Props {
    totalQues: any
}


const DisplayAns: React.FC<Props> = ({ totalQues }) => {


    return (
        <>
            <div className="container">
                <h1 className="disTitle">Submited Answers</h1>
                {totalQues.map((item: any, ind: number) => {

                    return (
                        <div className="cont">
                            <h3 className="disQues">{item.question}</h3>
                            <h6 className="disAns">{item?.answer?.length > 0 ? item.answer : "Not Answered"}</h6>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DisplayAns