export default function Post (props){
    
    return(
      <>
    
<div class="post">
  <div class="topo">
    <div class="usuario">
      <img src={props.photoUser} alt="a" />
      {props.name}
    </div>
    <div class="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div class="conteudo">
    <img src={props.conteudo} alt="a" />
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
 
    <div class="curtidas">
      <img src="assets/img/respondeai.svg" alt="a" />
      <div class="texto">
        Curtido por <strong>{props.curtidaUser}</strong> e <strong>outras {props.curtidaCont} pessoas</strong>
      </div>
    </div>
  </div>
</div>

</>
)
    }