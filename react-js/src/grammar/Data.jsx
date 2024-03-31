function Func1({name = '리액트', desc = '재미없어'}) {
    return (
        <div>
            <h1>안녕 난 {name}야!</h1>
            <p>{name}는 {desc}.</p>
        </div>
        )
}

const Func2 = function() {
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

const Func3 = () => {
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

function Data() {
    const users = [
        {
            id: 1,
            name: '봄',
            age: 2,
        },
        {
            id: 2,
            name: '여름',
            age: 3,
        },
        {
            id: 3,
            name: '가을',
            age: 1,
        },
        {
            id: 4,
            name: '겨울',
            age: 5,
        },
    ]

    const info = {
        birth: '2021-01-01',
        phone: null,
    }

    const data2 = {
        name: 'vue',
        desc: '재밌어'
    }

    return (
        // <ul>
        //     <li>{users[0].name}이는 {users[0].age}살</li>
        //     <li>{users[1].name}이는 {users[1].age}살</li>
        //     <li>{users[2].name}이는 {users[2].age}살</li>
        // </ul>
        <>
            <ul>
            {users.map((user, idx) => (
                <li key={idx}>
                    {user.name}이는 {user.age}살
                </li>
                ))}
            </ul>
            <Func1 {...data2}/>
            <Func2/>
            <Func3/>
            <ul>
                <li>{info.birth || '생일 정보 없음'}</li>
                <li>{info.phone || '번호 정보 없음'}</li>
                <li>{info.address || '주소 정보 없음'}</li>
            </ul>
        </>
    )
}

export default Data;