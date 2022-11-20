export default function Storie(props) {
  return (
    <>
      <div className="story">
        <div className="imagem">
          <img src={props.image} alt="a" />
        </div>
        <div className="usuario">{props.urser}</div>
      </div>
    </>
  );
}
