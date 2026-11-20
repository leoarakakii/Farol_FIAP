import { useEffect, useRef, useState } from 'react';
import { Categorias, ConteudoTipos, dataSets } from './component/Database';
import {
  approveContentEntry,
  CONTENT_REJECTION_REASONS,
  getContentEntries,
  getSafeHttpUrl,
  rejectContentEntry,
} from './component/contentRegistry';
import IncorrectContentReviewDialog from './component/IncorrectContentReviewDialog';
import './component/css/moderacao.css';

function ModeracaoConteudo() {
  const [entries, setEntries] = useState([]);
  const [loadError, setLoadError] = useState('');
  const [actionError, setActionError] = useState('');
  const [rejectionTargetId, setRejectionTargetId] = useState(null);
  const [selectedRejectionReasons, setSelectedRejectionReasons] = useState([]);
  const [showIncorrectInfoDialog, setShowIncorrectInfoDialog] = useState(false);
  const [reviewValues, setReviewValues] = useState(null);
  const [incorrectFields, setIncorrectFields] = useState([]);
  const rejectionDialogRef = useRef(null);
  const incorrectInfoDialogRef = useRef(null);
  const rejectionTriggerRef = useRef(null);

  useEffect(() => {
    try {
      setEntries(getContentEntries(dataSets.conteudos));
    } catch (error) {
      console.error('Não foi possível carregar a fila de moderação.', error);
      setLoadError('Não foi possível carregar a fila de moderação.');
    }
  }, []);

  useEffect(() => {
    if (!rejectionTargetId) {
      return undefined;
    }

    (showIncorrectInfoDialog ? incorrectInfoDialogRef : rejectionDialogRef).current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (showIncorrectInfoDialog) {
          setShowIncorrectInfoDialog(false);
        } else {
          closeRejectionDialog();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rejectionTargetId, showIncorrectInfoDialog]);

  function handleDecision(id, decision, rejectionReasons) {
    try {
      if (decision === 'approved') {
        approveContentEntry(id);
      } else {
        rejectContentEntry(id, rejectionReasons);
      }

      setEntries((currentEntries) =>
        currentEntries.map((entry) =>
          entry.id === id ? { ...entry, status: decision } : entry
        )
      );
      setActionError('');
      setRejectionTargetId(null);
      setSelectedRejectionReasons([]);
      setShowIncorrectInfoDialog(false);
      setReviewValues(null);
      setIncorrectFields([]);
    } catch (error) {
      console.error('Não foi possível atualizar o conteúdo.', error);
      setActionError('Não foi possível atualizar o conteúdo. Tente novamente.');
    }
  }

  function handleRejectSubmit(event) {
    event.preventDefault();
    if (rejectionTargetId && selectedRejectionReasons.length > 0) {
      handleDecision(rejectionTargetId, 'rejected', selectedRejectionReasons);
    }
  }

  function closeRejectionDialog() {
    setRejectionTargetId(null);
    setSelectedRejectionReasons([]);
    setShowIncorrectInfoDialog(false);
    setReviewValues(null);
    setIncorrectFields([]);
    rejectionTriggerRef.current?.focus();
  }

  function handleRejectionReasonChange(reason, isSelected) {
    setSelectedRejectionReasons((currentReasons) =>
      isSelected
        ? [...currentReasons, reason]
        : currentReasons.filter((currentReason) => currentReason !== reason)
    );

    if (reason !== CONTENT_REJECTION_REASONS[0]) {
      return;
    }

    if (!isSelected) {
      setShowIncorrectInfoDialog(false);
      setReviewValues(null);
      setIncorrectFields([]);
      return;
    }

    const entry = entries.find((currentEntry) => currentEntry.id === rejectionTargetId);
    if (!entry) {
      setActionError('Não foi possível carregar os dados do conteúdo.');
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

  const pendingEntries = entries.filter((entry) => entry.status === 'pending');
  const rejectionEntry = entries.find((entry) => entry.id === rejectionTargetId);

  return (
    <div className="moderation-page">
      <header className="moderation-header">
        <h1>Moderação de conteúdo</h1>
        <p>Revise os conteúdos enviados antes que apareçam nas matérias.</p>
      </header>

      {loadError ? (
        <p className="moderation-message" role="alert">{loadError}</p>
      ) : (
        <>
          {actionError && !rejectionTargetId && (
            <p className="moderation-message moderation-error" role="alert">{actionError}</p>
          )}
          {pendingEntries.length === 0 ? (
            <p className="moderation-message">Não há conteúdos aguardando aprovação.</p>
          ) : (
            <ul className="moderation-list">
              {pendingEntries.map((entry) => {
                const category = Categorias.find((item) => item.value === entry.category);
                const subcategory = category?.subcategorias.find(
                  (item) => item.value === entry.subcategory
                );
                const subcategory2 = subcategory?.subcategorias2.find(
                  (item) => item.value === (entry.subcategory2 || entry.specialty)
                );
                const type = ConteudoTipos.find((item) => item.value === entry.type);
                const safeUrl = getSafeHttpUrl(entry.link);

                return (
                  <li className="moderation-item" key={entry.id}>
                    <h2>{entry.title}</h2>
                    <dl>
                      <div><dt>Tipo</dt><dd>{type?.label || entry.type}</dd></div>
                      <div><dt>Categoria</dt><dd>{category?.label || entry.category}</dd></div>
                      <div><dt>Subcategoria</dt><dd>{subcategory?.label || entry.subcategory}</dd></div>
                      {(entry.subcategory2 || entry.specialty) && (
                        <div>
                          <dt>Subcategoria 2</dt>
                          <dd>{subcategory2?.label || entry.subcategory2 || entry.specialty}</dd>
                        </div>
                      )}
                    </dl>
                    {entry.tags.length > 0 && (
                      <p><strong>Tags:</strong> {entry.tags.join(', ')}</p>
                    )}
                    <p className="moderation-link">
                      <strong>Link:</strong>{' '}
                      {safeUrl ? (
                        <a href={safeUrl} target="_blank" rel="noreferrer">{entry.link}</a>
                      ) : (
                        entry.link
                      )}
                    </p>
                    <div className="moderation-actions">
                      <button
                        type="button"
                        className="moderation-accept"
                        onClick={() => handleDecision(entry.id, 'approved')}
                      >
                        Aceitar
                      </button>
                      <button
                        type="button"
                        className="moderation-reject"
                        onClick={(event) => {
                          rejectionTriggerRef.current = event.currentTarget;
                          setActionError('');
                          setSelectedRejectionReasons([]);
                          setShowIncorrectInfoDialog(false);
                          setReviewValues(null);
                          setIncorrectFields([]);
                          setRejectionTargetId(entry.id);
                        }}
                      >
                        Rejeitar
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}

      {rejectionTargetId && !showIncorrectInfoDialog && (
        <div
          className="moderation-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeRejectionDialog();
            }
          }}
        >
          <div
            className="moderation-rejection-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="moderation-rejection-title"
            tabIndex="-1"
            ref={rejectionDialogRef}
          >
            <h2 id="moderation-rejection-title">Por que este conteúdo está sendo rejeitado?</h2>
            <p>Selecione um ou mais motivos para registrar a rejeição.</p>
            {actionError && (
              <p className="moderation-message moderation-error" role="alert">{actionError}</p>
            )}
            <form onSubmit={handleRejectSubmit}>
              <fieldset className="moderation-rejection-options">
                <legend>Motivos da rejeição</legend>
                {CONTENT_REJECTION_REASONS.map((reason) => (
                  <label key={reason}>
                    <input
                      type="checkbox"
                      checked={selectedRejectionReasons.includes(reason)}
                      onChange={(event) =>
                        handleRejectionReasonChange(reason, event.target.checked)
                      }
                    />
                    <span>{reason}</span>
                  </label>
                ))}
              </fieldset>
              <div className="moderation-modal-actions">
                <button type="button" className="moderation-modal-cancel" onClick={closeRejectionDialog}>
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="moderation-modal-confirm"
                  disabled={selectedRejectionReasons.length === 0}
                >
                  Confirmar rejeição
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {rejectionTargetId &&
        showIncorrectInfoDialog &&
        rejectionEntry &&
        reviewValues && (
          <IncorrectContentReviewDialog
            entry={rejectionEntry}
            values={reviewValues}
            incorrectFields={incorrectFields}
            dialogRef={incorrectInfoDialogRef}
            onValueChange={handleReviewValueChange}
            onToggleIncorrectField={handleIncorrectFieldToggle}
            onBack={() => setShowIncorrectInfoDialog(false)}
          />
        )}
    </div>
  );
}

export default ModeracaoConteudo;
