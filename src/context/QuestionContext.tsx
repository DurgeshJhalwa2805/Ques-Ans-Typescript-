import React, { createContext } from "react"
import quesJson from "../local-json/questions.json"

console.log(quesJson, "ques")

type QuestionContextProviderProps = {
    children: React.ReactNode
}

export const QuestionContext = createContext(quesJson)

export const QuestionContextProvider = ({ children }: QuestionContextProviderProps) => {
    return <QuestionContext.Provider value={quesJson}>
        {children}
    </QuestionContext.Provider>
}