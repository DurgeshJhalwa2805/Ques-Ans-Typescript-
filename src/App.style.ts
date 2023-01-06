import styled, { createGlobalStyle } from "styled-components";

// Other styles
export const Wrapper = styled.div`


.mainDiv {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8e8e8;
    text-align: center;

}

.card {
    width: 50%;
    height: 60vh;
    background-color: ghostwhite;
    box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
   
}
.centerCss{
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
}
.backBtn{
    text-align: left;
    padding: 15px;
}

.heading{
    margin: 10px auto;
    color: #0e0e0e;
}


.btnDiv {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


.btnCss {
    min-height: 40px;
    border-radius: 5%;
    border-color: transparent;
    background-color: #30336b;
    color: #fff;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 0px 35px;
    margin-top: 15px;
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}


.btnStart{
    background-color: #e90000;
    width: 150px;
}
.btnStart:hover{
    background-color: #ff0303;
}
.questionBox{
    height: 100%;
    width: 100%;
}
.btnGrp{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
}
.prevBtn{
    margin-top: 5px;
    background-color: #ff3d00;
    width: 150px;
}
.prevBtn:hover{
    background-color: #f06b41;
}
.nextBtn{
    margin-top: 5px;
    background-color: #5ec605;
    width: 150px;
}
.nextBtn:hover{
    background-color: #79ff07;
}
.quesHead{
    font-weight: 500;
    font-size: 18px;
}

`