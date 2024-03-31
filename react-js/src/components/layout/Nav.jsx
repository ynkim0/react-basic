// const Nav = (props) => {
//   const list = []
//   for (let i=0; i < props.nav.length; i++) {
//     list.push(
//       <li key={i}>
//         <a href="#">{props.nav[i].title}</a>
//       </li>
//     )
//   }
//   return (
//     <nav>
//       <ul>
//         {list}
//       </ul>
//     </nav>
//   );
// };

const Nav = ({nav}) => {
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
        <li key={index}>
          <a href="/">{item.title}</a>
        </li>))}
      </ul>
    </nav>
  );
  };

// function Nav(props) {
//   // prop로 전달된 nav를 받아서 동적으로 li를 구성한 다음 배열에 담아준다.
//   // map((item, index) => { return ... }) 형태로 사용한다. item = 배열의 요소, index = 0, 1, 2
//   const list = props.nav.map((item, index) => (
//       // item.title = Home, About, js
//       // index = 0, 1, 2
//       <li key={index}>
//           <a href="/">{item.title}</a>
//       </li>
//   ))

//   return (
//       <nav>
//           <ul>{list}</ul>
//       </nav>
//   )
// }

export default Nav