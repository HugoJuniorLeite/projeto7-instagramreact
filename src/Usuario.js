import React, { useState } from "react";

export default function Usuario() {
const [nome, setNome] = useState("Catana")
const [image, setImage] =useState ('assets/img/catanacomics.svg')
  
  function atualizarNome(){

  setNome(prompt('escolha seu nome'))
  
}

  function atualizarImage(){
  setImage(prompt("Digite o link da imagem"))    
  }

  return (
    <div data-test="user" className="usuario">
      <img data-test="profile-image"onClick={atualizarImage} src={!image ? 'assets/img/catanacomics.svg' : image} alt="a" />
      <div className="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {!nome?"Catana" :nome}
          <ion-icon data-test="edit-name" onClick={atualizarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
