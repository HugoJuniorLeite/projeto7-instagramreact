import Post from "./Post"

const post  = [
    {
    photoUser:"assets/img/meowed.svg",
   name:"meowed",
   conteudo:"assets/img/gato-telefone.svg",
   curtidaUser:"respondea" ,
   curtidaCont:15},
  {
    photoUser:"assets/img/barked.svg",
   name:"barked",
   conteudo:"assets/img/dog.svg",
    curtidaUser:"adorable_animals" ,
    curtidaCont:123},
    {
      photoUser:"assets/img/meowed.svg",
     name:"meowed",
     conteudo:"assets/img/gato-telefone.svg",
     curtidaUser:"respondea" ,
     curtidaCont:15}]


export default function Posts(){
  const newPost = post.map((p)=> < Post photoUser = {p.photoUser} name = {p.name} conteudo ={p.conteudo} curtidaUser ={p.curtidaUser} curtidaCont ={p.curtidaCont} />) 
return (
  <>
<div class="posts">
  {newPost} 
</div>
 </>
)
}

    





