import Comments from "../../comments/Comments";

function Home({desc, title}) {
  return (
    <main>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Comments/>
    </main>
  );
}

export default Home