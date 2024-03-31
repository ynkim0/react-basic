function Operator() {
    return (
        <div>
            <h2>연산자</h2>
            <h3>논리 연산자</h3>
            <p>{`true && true = ${true && true}`}</p> {/* 두 조건이 모두 참일 경우 true 반환 */}
            <p>{`true && false = ${true && false}`}</p>{' '}
            {/* 두 조건 중 하나가 거짓이므로 첫 번째 거짓인 값인 false 반환 */}
            <p>{`true || false = ${true || false}`}</p> {/* 두 조건 중 하나라도 참일 경우 true 반환 */}
            <p>{`false || false = ${false || false}`}</p> {/* 두 조건이 모두 거짓일 경우 false 반환 */}
            <p>{`!true = ${!true}`}</p> {/* 부정연산자 : 조건이 참일 경우 false 반환 */}
            <p>{`!false = ${!false}`}</p> {/* 부정연산자 : 조건이 거짓일 경우 true 반환 */}
        </div>
    )
}

export default Operator;