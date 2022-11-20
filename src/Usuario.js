import React, { useState } from "react";

export default function Usuario() {
  const [nome, setNome] = useState("Catana")
const [imgage, setImage] =useState ('assets/img/catanacomics.svg')
  
  function atualizarNome(){

    setNome(prompt('escolha seu nome'))
  }

  function atualizarImage(){
  setImage(prompt("Digite o link da imagem"))    
  }

  return (
    <div className="usuario">
      <img onClick={atualizarImage} src={imgage} alt="a" />
      <div className="texto">
        <strong>catanacomics</strong>
        <span>
          {nome}
          <ion-icon onClick={atualizarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
