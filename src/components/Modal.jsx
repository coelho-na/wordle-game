import React from "react";

const Modal = ({ isCorrect, turn, solution, setShowModal }) => {
  return (
    <div className="modal">
      <span className="modal__close" onClick={() => window.location.reload()}>
        X
      </span>
      {isCorrect && (
        <div>
          <h1>Você venceu!🎉🎉 </h1>
          <p className="solution"> A palavra escondida era {solution}</p>
          <p>Você encontrou a palavra na {turn}º tentativa(s) 😀 .</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Deixa pra lá!👎</h1>
          <p className="solution"> A palavra escondida era {solution}</p>
          <p>Boa sorte na próxima vez! 🤲</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
