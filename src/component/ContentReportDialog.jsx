import React, { useEffect, useRef, useState } from 'react';
import './css/moderacao.css';
import IncorrectContentReviewDialog from './IncorrectContentReviewDialog';
import {
  CONTENT_REJECTION_REASONS,
  reportContentEntry,
} from './contentRegistry';

function ContentReportDialog({ entry, subjectName, onClose }) {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showIncorrectInfoDialog, setShowIncorrectInfoDialog] = useState(false);
  const [reviewValues, setReviewValues] = useState(null);
  const [incorrectFields, setIncorrectFields] = useState([]);
  const dialogRef = useRef(null);
  const incorrectInfoDialogRef = useRef(null);
  const reasons = [
    ...CONTENT_REJECTION_REASONS,
    `Irrelevante para ${subjectName}`,
  ];

  useEffect(() => {
    (showIncorrectInfoDialog ? incorrectInfoDialogRef : dialogRef).current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (showIncorrectInfoDialog) {
          setShowIncorrectInfoDialog(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, showIncorrectInfoDialog]);

  function handleReasonChange(reason, isSelected) {
    setSelectedReasons((currentReasons) => {
      if (isSelected) {
        return currentReasons.includes(reason)
          ? currentReasons
          : [...currentReasons, reason];
      }
      return currentReasons.filter((item) => item !== reason);
    });
    setError('');

    if (reason !== CONTENT_REJECTION_REASONS[0]) {
      return;
    }

    if (!isSelected) {
      setShowIncorrectInfoDialog(false);
      setReviewValues(null);
      setIncorrectFields([]);
      return;
    }

    setReviewValues({
      title: entry.title,
      type: entry.type,
      category: entry.category,
      subcategory: entry.subcategory,
      subcategory2: entry.subcategory2 || entry.specialty || '',
      link: entry.link,
      tags: entry.tags,
    });
    setIncorrectFields([]);
    setShowIncorrectInfoDialog(true);
  }

  function handleReviewValueChange(field, value) {
    setReviewValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  function handleIncorrectFieldToggle(field) {
    setIncorrectFields((currentFields) =>
      currentFields.includes(field)
        ? currentFields.filter((currentField) => currentField !== field)
        : [...currentFields, field]
    );
  }

  function getReportedIncorrectFields() {
    if (!reviewValues) {
      return incorrectFields;
    }

    const originalValues = {
      type: entry.type,
      category: entry.category,
      subcategory: entry.subcategory,
      subcategory2: entry.subcategory2 || entry.specialty || '',
    };
    const changedSelectFields = Object.keys(originalValues).filter(
      (field) => reviewValues[field] !== originalValues[field]
    );
    return [...new Set([...incorrectFields, ...changedSelectFields])];
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      reportContentEntry(
        entry.id,
        selectedReasons,
        subjectName,
        getReportedIncorrectFields()
      );
      setSubmitted(true);
      setError('');
    } catch (submitError) {
      console.error('Não foi possível registrar a denúncia.', submitError);
      setError('Não foi possível registrar a denúncia. Tente novamente.');
    }
  }

  return (
    <>
      {!showIncorrectInfoDialog && (
        <div
          className="moderation-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <section
            aria-labelledby="content-report-title"
            aria-modal="true"
            className="moderation-rejection-dialog"
            ref={dialogRef}
            role="dialog"
            tabIndex="-1"
          >
            <h2 id="content-report-title">Denunciar conteúdo</h2>
            <p>
              {submitted
                ? 'Sua denúncia foi registrada.'
                : `Selecione um ou mais motivos para denunciar “${entry.title}”.`}
            </p>
            {submitted ? (
              <div className="moderation-modal-actions">
                <button
                  className="moderation-modal-confirm"
                  type="button"
                  onClick={onClose}
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <fieldset className="moderation-rejection-options">
                  <legend>Motivos da denúncia</legend>
                  {reasons.map((reason) => (
                    <label key={reason}>
                      <input
                        checked={selectedReasons.includes(reason)}
                        onChange={(event) =>
                          handleReasonChange(reason, event.target.checked)
                        }
                        type="checkbox"
                      />
                      <span>{reason}</span>
                    </label>
                  ))}
                </fieldset>
                {error && (
                  <p className="moderation-error" role="alert">
                    {error}
                  </p>
                )}
                <div className="moderation-modal-actions">
                  <button
                    className="moderation-modal-cancel"
                    type="button"
                    onClick={onClose}
                  >
                    Cancelar
                  </button>
                  <button
                    className="moderation-modal-confirm"
                    disabled={selectedReasons.length === 0}
                    type="submit"
                  >
                    Enviar denúncia
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
      {showIncorrectInfoDialog && reviewValues && (
        <IncorrectContentReviewDialog
          entry={entry}
          values={reviewValues}
          incorrectFields={incorrectFields}
          dialogRef={incorrectInfoDialogRef}
          onValueChange={handleReviewValueChange}
          onToggleIncorrectField={handleIncorrectFieldToggle}
          onBack={() => setShowIncorrectInfoDialog(false)}
        />
      )}
    </>
  );
}

export default ContentReportDialog;
