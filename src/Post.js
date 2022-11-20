import { useState } from "react";

export default function Post(props) {
  
const [save, setSave] = useState("bookmark-outline")  
const [like, setLike] = useState("heart-outline")
const [contNow, setContNow] =useState(props.curtidaCont)

function savePost(){

save === "bookmark-outline" ?  setSave("bookmark") : setSave("bookmark-outline")
}

function actionLike(){

like==="heart-outline" ? setLike("heart") : setLike("heart-outline") 
like==="heart-outline" ? setContNow(props.curtidaCont+1): setContNow(props.curtidaCont)

}
  return (
    <>
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.photoUser} alt="a" />
            {props.name}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.conteudo} alt="a" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon onClick ={actionLike} name={like} class={like}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              
              <ion-icon onClick={savePost} name= {save}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/respondeai.svg" alt="a" />
            <div className="texto">
              Curtido por <strong>{props.curtidaUser}</strong> e{" "}
              <strong>outras {contNow} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
