// Recat에서 컴포넌트 명을 쓸 때는 일반 js와 구분하기 위하여 첫 글자를 대문자로 작성
function Hello() {
    console.log("hello!")
// return 안쪽에는 단일 태그여야 함, 따라서 빈 태그로 감싸줌
    return (
        <>
            <div>
                <h2>컴포넌트 만들기</h2>
            </div>
            <div>
                <p>,,,,</p>
            </div>
        </>
    )
}

export function World() {
    return (
        <div>
            <h3>컴포넌트2 만들기</h3>
        </div>
    )
}

export function World2() {
    return (
        <div>
            <h3>컴포넌트2 만들기</h3>
        </div>
    )
}

export default Hello
// export {World}