import React from 'react';
import { Wrapper } from './App.style';
import QuestionCard from './components/QuestionCard';
import { QuestionContextProvider } from './context/QuestionContext';

function App() {
  return (
    <>
      <Wrapper>
        <QuestionContextProvider>
          <div className="mainDiv">
            <QuestionCard />
          </div>
        </QuestionContextProvider>
      </Wrapper>
    </>
  );
}

export default App;
