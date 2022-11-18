
const storie = [{image:"assets/img/9gag.svg"},{urser:"9gag"},
{image:"assets/img/meowed.svg"},{urser:"meowed"},


]

export default function Stories(){

return(

<div class="stories">
        <div class="story">
          <div class="imagem">
            <img src={props.image} alt="a" />
          </div>
          <div class="usuario">
            {props.urser}
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/meowed.svg" alt="a" />
          </div>
          <div class="usuario">
            meowed
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/barked.svg" alt="a" />
          </div>
          <div class="usuario">
            barked
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/nathanwpylestrangeplanet.svg" alt="a" />
          </div>
          <div class="usuario">
            nathanwpylestrangeplanet
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/wawawicomics.svg" alt="a" />
          </div>
          <div class="usuario">
            wawawicomics
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/respondeai.svg" alt="a" />
          </div>
          <div class="usuario">
            respondeai
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/filomoderna.svg" alt="a" />
          </div>
          <div class="usuario">
            filomoderna
          </div>
        </div>

        <div class="story">
          <div class="imagem">
            <img src="assets/img/memeriagourmet.svg" alt="a" />
          </div>
          <div class="usuario">
            memeriagourmet
          </div>
        </div>

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
)
}