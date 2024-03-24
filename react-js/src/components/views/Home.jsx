function Home(props) {

    const {title, des} = props

    // const props = {
    //      title: "Home",
    //      des: "홈 화면"
    // }
    return (
      <article>
        <h2>{props.title}</h2>
        <p>이 화면은 {props.des}입니다.</p>
      </article>
    )
  }

export default Home