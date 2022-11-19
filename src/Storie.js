export default function Storie(props){
    return(
    <>
      <div class="story">
      <div class="imagem">
        <img src={props.image} alt="a" />
      </div>
      <div class="usuario">
        {props.urser}
      </div>
    </div>
    </>
    )
    }
    
    
    