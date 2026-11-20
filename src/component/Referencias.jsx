import { useCallback, useEffect, useState } from 'react';
import { dataSets } from './Database';
import { getContentEntries, getSafeHttpUrl } from './contentRegistry';
import ContentReportButton from './ContentReportButton';
import ContentReportDialog from './ContentReportDialog';

function normalizeTag(tag) {
  return tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
}

function Referencias({ questionTags = [], subjectName = '' }) {
  const [entries, setEntries] = useState([]);
  const [loadError, setLoadError] = useState('');
  const [reportTarget, setReportTarget] = useState(null);
  const closeReportDialog = useCallback(() => setReportTarget(null), []);

  useEffect(() => {
    const refreshEntries = () => {
      try {
        setEntries(getContentEntries(dataSets.conteudos));
        setLoadError('');
      } catch (error) {
        console.error('Não foi possível carregar as referências da questão.', error);
        setLoadError('Não foi possível carregar as referências.');
      }
    };

    refreshEntries();
    window.addEventListener('edu:content-registry-updated', refreshEntries);
    window.addEventListener('storage', refreshEntries);

    return () => {
      window.removeEventListener('edu:content-registry-updated', refreshEntries);
      window.removeEventListener('storage', refreshEntries);
    };
  }, []);

  const normalizedQuestionTags = new Set(
    questionTags.map(normalizeTag).filter(Boolean)
  );
  const references = entries
    .filter((entry) => entry.status === 'approved')
    .map((entry) => ({
      ...entry,
      matchedTags: entry.tags.filter((tag) =>
        normalizedQuestionTags.has(normalizeTag(tag))
      ),
    }))
    .filter((entry) => entry.matchedTags.length > 0);

  return (
    <>
      <section className="Pergunta-references" aria-labelledby="referencias-title">
        <h3 id="referencias-title">Referências</h3>
        {loadError ? (
          <p role="alert">{loadError}</p>
        ) : references.length === 0 ? (
          <p>
            {normalizedQuestionTags.size === 0
              ? 'Esta questão ainda não possui tags de referência.'
              : 'Não há conteúdos aprovados com tags relacionadas a esta questão.'}
          </p>
        ) : (
          <ul className="Pergunta-reference-list">
            {references.map((entry) => {
              const safeUrl = getSafeHttpUrl(entry.link);
              const reportSubject = subjectName || entry.category || 'este assunto';

              return (
                <li className="Pergunta-reference" key={entry.id}>
                  <div className="Pergunta-reference-header">
                    <h4>{entry.title}</h4>
                    <ContentReportButton
                      className="Pergunta-reference-report"
                      title={entry.title}
                      onClick={() =>
                        setReportTarget({ entry, subjectName: reportSubject })
                      }
                    />
                  </div>
                  <p>Tags relacionadas: {entry.matchedTags.join(', ')}</p>
                  {entry.link && (
                    safeUrl ? (
                      <a href={safeUrl} target="_blank" rel="noreferrer">
                        {entry.link}
                      </a>
                    ) : (
                      <p><strong>Link:</strong> {entry.link}</p>
                    )
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
      {reportTarget && (
        <ContentReportDialog
          entry={reportTarget.entry}
          subjectName={reportTarget.subjectName}
          onClose={closeReportDialog}
        />
      )}
    </>
  );
}

export default Referencias;
