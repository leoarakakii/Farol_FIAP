import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questionsByExam } from './component/Database';
import Referencias from './component/Referencias';

function Pergunta( { questaoId, provaSlug, onAnswered }) {
  const navigate = useNavigate();
  const questions = questionsByExam[provaSlug] || [];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions.find((q) => q.id === questaoId);
  const currentIndex = questions.findIndex((q) => q.id === questaoId);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [questaoId, provaSlug]);

  if (!currentQuestion) {
    return (
      <div className="Pergunta">
        <h2 className="Pergunta-title">Questão não encontrada!</h2>
      </div>
    );
  }

  const questionText = currentQuestion.pergunta[0].questao;
  const questionParagraphs = Array.isArray(questionText) ? questionText : [questionText];
  const options = currentQuestion.pergunta.slice(1);

  const handleSelect = (optionKey) => {
    if (!isSubmitted) {
      setSelectedOption(optionKey);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption) {
      setIsSubmitted(true);
      onAnswered(provaSlug, currentQuestion.id);
    }
  };

  const handleNextQuestion = () => {
    navigate(`/provas/${provaSlug}/${questaoId + 1}`);
  };

  const getCorrectAnswerText = () => {
    const correctObj = options.find(
      (opt) => Object.keys(opt)[0] === currentQuestion.respostaCorreta
    );
    return correctObj ? Object.values(correctObj)[0] : '';
  };

  return (
    <div className="Pergunta">
      <h2 className="Pergunta-title">{currentQuestion.slug}</h2>
      <div className="Pergunta-prompt">
        {questionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="Pergunta-options">
        {options.map((optionObj) => {
          const key = Object.keys(optionObj)[0];
          const text = Object.values(optionObj)[0];

          let backgroundColor = '#f0f0f0';
          if (isSubmitted) {
            if (key === currentQuestion.respostaCorreta) {
              backgroundColor = '#a3e635';
            } else if (key === selectedOption) {
              backgroundColor = '#f87171';
            }
          } else if (selectedOption === key) {
            backgroundColor = '#93c5fd';
          }

          return (
            <button
              key={key}
              className="Pergunta-option"
              onClick={() => handleSelect(key)}
              disabled={isSubmitted}
              style={{
                backgroundColor,
              }}
            >
              {text}
            </button>
          );
        })}
      </div>

      {!isSubmitted && (
        <button
          onClick={handleCheckAnswer}
          disabled={!selectedOption}
          className="Pergunta-submit"
        >
          Confirmar Resposta
        </button>
      )}

      {isSubmitted && (
        <div className="Pergunta-feedback">
          {selectedOption === currentQuestion.respostaCorreta ? (
            <p className="Pergunta-feedback-correct">🎉 Você acertou!</p>
          ) : (
            <p className="Pergunta-feedback-incorrect">
              ❌ Resposta incorreta. A resposta certa é: {getCorrectAnswerText()}
            </p>
          )}

          {currentIndex < questions.length - 1 ? (
            <button onClick={handleNextQuestion} className="Pergunta-next">
              Próxima Questão
            </button>
          ) : (
            <p><strong>Você concluiu todas as questões!</strong></p>
          )}
        </div>
      )}
      <Referencias
        questionTags={currentQuestion.tags || []}
        subjectName={currentQuestion.tags?.[0] || ''}
      />
    </div>
  );
}

export default Pergunta;