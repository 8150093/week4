import React from "react";
import { useState } from "react";
import './Introduce.css';

function Hello(props){
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[hobby,setHobby] = useState("");
    const[mbti, setMbti] = useState("");
    const[where, setWhere] = useState("");
    const[part, setPart] = useState("");

function onChangeName(e){
    setName(e.target.value);
}
function onChangeAge(e){
    setAge(e.target.value);
}
function onChangeHobby(e){
    setHobby(e.target.value);
}
function onChangePart(e){
    setPart(e.target.value);
}
function onChangeWhere(e){
    setWhere(e.target.value);
}
function onChangeMbti(e){
    setMbti(e.target.value);
}

    return(
        <div>
            <div class="title">
            <p>Who am I?</p>
            </div>

        <br></br>
        <input onChange={onChangename} value={props.name} />
        <br></br>
        <input onChang={onChangeage} value={props.age}/>
        <br></br>
        <input onChange={onChangehobby} value={props.hobby}/>
        <br></br>
        <input onChange={onChangepart} value={props.part}/>
        <br></br>
        <input onChange={onChangewhere} value={props.where}/>
        <br></br>
        <input onChange={onChangembti} value={props.mbti}/>


        <div class="intro">
            <div class = "container">
                <img class="me" src="C:\Users\eunbi\OneDrive\바탕 화면\은빈\프사 사진.jpg"></img>
                <p>이름 : {props.name}</p>
                <p>나이 : {props.age}</p>
                <p>파트 : {props.part}</p>
                <p>거주지 : {props.where}</p>
                <p>MBTI : {props.mbti}</p>
            </div>
            <br />

            <div class ="card">
            <p>취미 : {props.hobby} </p>
            <a href="https://www.instagram.com/eunbini_02/?hl=ko"><img class="pole" src="C:\Users\eunbi\OneDrive\바탕 화면\은빈\코딩\멋사\react-practice\src\images\KakaoTalk_20220402_154135054.jpg"></img></a>
            </div>

            <div class="card-1">
            <p>알바 : 뽀로로파크</p>
            <a href="http://www.pororopark.com/"><img class ="pororo" src="C:\Users\eunbi\OneDrive\바탕 화면\은빈\코딩\멋사\react-practice\src\images\뽀파.jpg"></img></a>
            </div>

            <div class="card-2">
            <p>관심사 : 요리 & 여행 </p>
            <a href="https://www.instagram.com/eunbini_02/?hl=ko"><img class="cook" src="C:\Users\eunbi\OneDrive\바탕 화면\은빈\코딩\멋사\react-practice\src\images\사본 -요리음식.jpg"></img></a>
            <button onclick="changelmg()">change</button>
            <a href="https://www.instagram.com/eunbini_02/?hl=ko"><img class="trip" src="C:\Users\eunbi\OneDrive\바탕 화면\은빈\코딩\멋사\react-practice\src\images\사본 -패들보트.jpg"></img></a>
            </div>
            <br /><br />
        </div>
    </div>
    );

}