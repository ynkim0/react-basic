import { useState } from "react";

function handleOnClick() {
    alert("clicked!");
}

function handleMouseOver(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";

}

function handleChange(event) {
    const textValue = document.querySelector(".text-value")
    textValue.innerText =  event.target.value;
}

const Event = () => {
    const [count, setCount] = useState(0);

    function handleState() {
        setCount(count + 1);
    }    

    return (
        <div>
            <h1>Event</h1>
            <h2>클릭 이벤트</h2>
            <button onClick={handleOnClick}>클릭</button>
            <h2>클릭하여 상태 변경</h2>
            <button onClick={handleState}>클릭하여 증가: {count}</button>
            <h2>조건부 렌더링 예제</h2>
            {count >= 5 ? <p>5 이상</p>: <p>5 미만</p>}
            <h2>입력 이벤트</h2>
            <input type="text" placeholder="가이드 텍스트" onChange={handleChange}/>
            <div className="text-value"></div>
            <h2>마우스 오버 이벤트</h2>
            <div onMouseOver={handleMouseOver}>마우스를 올려주세요.</div>
        </div>
    )
}

export default Event