import { useCallback, useEffect, useRef, useState } from 'react';
import './component/css/style.css';
import { Link, useParams } from 'react-router-dom';
import { ConteudoTipos, dataSets } from './component/Database';
import ContentReportButton from './component/ContentReportButton';
import ContentReportDialog from './component/ContentReportDialog';
import {
  deleteContentEntry,
  getContentEntries,
  getSafeHttpUrl,
} from './component/contentRegistry';

function createSlug(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function VerMateria() {
  const [contents, setContents] = useState([]);
  const [contentError, setContentError] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [reportTarget, setReportTarget] = useState(null);
  const deleteDialogRef = useRef(null);
  const deleteTriggerRef = useRef(null);
  const { slug, subcategory, specialty } = useParams();
  const closeReportDialog = useCallback(() => setReportTarget(null), []);

  useEffect(() => {
    if (!deleteTarget) {
      if (deleteTriggerRef.current?.isConnected) {
        deleteTriggerRef.current.focus();
      }
      return undefined;
    }

    deleteDialogRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDeleteTarget(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deleteTarget]);

  useEffect(() => {
    try {
      setContents(getContentEntries(dataSets.conteudos));
    } catch (error) {
      console.error('Não foi possível carregar os conteúdos da matéria.', error);
      setContentError('Não foi possível carregar os conteúdos desta matéria.');
    }
  }, []);

  function handleDeleteContent(id, trigger) {
    const entry = contents.find((item) => item.id === id);
    if (!entry) {
      setDeleteError('Não foi possível localizar o conteúdo para excluir.');
      return;
    }

    deleteTriggerRef.current = trigger;
    setDeleteError('');
    setDeleteTarget(entry);
  }

  function confirmDeleteContent() {
    if (!deleteTarget) {
      return;
    }

    try {
      deleteContentEntry(deleteTarget.id);
      setContents((currentContents) =>
        currentContents.filter((entry) => entry.id !== deleteTarget.id)
      );
      setDeleteError('');
      setDeleteTarget(null);
    } catch (error) {
      console.error('Não foi possível excluir o conteúdo.', error);
      setDeleteError('Não foi possível excluir o conteúdo. Tente novamente.');
    }
  }

  const materiaAtual = dataSets.materias.find((item) => item.slug === slug);

  if (!materiaAtual) {
    return <h2>Matéria não encontrada!</h2>;
  }

  const subcategorias = materiaAtual.subcategories || [];
  const subcategoriaAtual = subcategory
    ? subcategorias.find((item) => createSlug(item.name) === subcategory)
    : null;
  const especialidadeAtual = subcategoriaAtual && specialty
    ? subcategoriaAtual.specialties.find((item) => createSlug(item) === specialty)
    : null;

  if (subcategory && !subcategoriaAtual) {
    return (
      <div
        className="Materia-page"
        style={{ '--subject-color': materiaAtual.color, borderTopColor: materiaAtual.color }}
      >
        <h1>Subcategoria não encontrada!</h1>
        <Link className="Materia-back-link" to={`/estudar/${encodeURIComponent(materiaAtual.slug)}`}>
          Voltar para {materiaAtual.name}
        </Link>
      </div>
    );
  }

  if (specialty && !especialidadeAtual) {
    return (
      <div
        className="Materia-page"
        style={{ '--subject-color': materiaAtual.color, borderTopColor: materiaAtual.color }}
      >
        <h1>Especialidade não encontrada!</h1>
        <Link
          className="Materia-back-link"
          to={`/estudar/${encodeURIComponent(materiaAtual.slug)}/${createSlug(subcategoriaAtual.name)}`}
        >
          Voltar para {subcategoriaAtual.name}
        </Link>
      </div>
    );
  }

  const materiaPath = `/estudar/${encodeURIComponent(materiaAtual.slug)}`;
  const subcategoriaPath = subcategoriaAtual
    ? `${materiaPath}/${createSlug(subcategoriaAtual.name)}`
    : '';
  const contentsForPage = contents.filter((entry) => {
    if (entry.category !== materiaAtual.slug) {
      return false;
    }

    if (subcategoriaAtual && entry.subcategory !== subcategoriaAtual.name) {
      return false;
    }

    const contentSubcategory2 = entry.subcategory2 || entry.specialty;
    return (
      entry.status === 'approved' &&
      (!especialidadeAtual || contentSubcategory2 === especialidadeAtual)
    );
  });

  return (
    <div
      className="Materia-page"
      style={{ '--subject-color': materiaAtual.color, borderTopColor: materiaAtual.color }}
    >
      <div className="Materia-layout">
        <section className="Materia-main-content">
          {especialidadeAtual ? (
            <>
              <nav className="Materia-breadcrumbs" aria-label="Navegação estrutural">
                <Link to={materiaPath}>{materiaAtual.name}</Link>
                <span aria-hidden="true">›</span>
                <Link to={subcategoriaPath}>{subcategoriaAtual.name}</Link>
              </nav>
              <h1>{especialidadeAtual}</h1>
            </>
          ) : subcategoriaAtual ? (
            <>
              <nav className="Materia-breadcrumbs" aria-label="Navegação estrutural">
                <Link to={materiaPath}>{materiaAtual.name}</Link>
                <span aria-hidden="true">›</span>
                <span>{subcategoriaAtual.name}</span>
              </nav>
              <h1>{subcategoriaAtual.name}</h1>
            </>
          ) : (
            <>
              <h1>{materiaAtual.name}</h1>
              <p>Explore as subcategorias disponíveis para esta matéria.</p>
            </>
          )}
          <section className="Materia-content-section" aria-label="Conteúdos da matéria">
            {contentError ? (
              <p role="alert">{contentError}</p>
            ) : (
              <>
                {deleteError && <p role="alert">{deleteError}</p>}
                {contentsForPage.length > 0 ? (
              <ul className="Materia-content-list">
                {contentsForPage.map((entry) => {
                  const type = ConteudoTipos.find((item) => item.value === entry.type);
                  const safeUrl = getSafeHttpUrl(entry.link);
                  return (
                    <li className="Materia-content-item" key={entry.id}>
                      <div className="Materia-content-item-header">
                        <h3>{entry.title}</h3>
                        <div className="Materia-content-item-actions">
                          <ContentReportButton
                            className="Materia-content-report"
                            title={entry.title}
                            onClick={() =>
                              setReportTarget({
                                entry,
                                subjectName: materiaAtual.name,
                              })
                            }
                          />
                          <button
                            className="Materia-content-delete"
                            type="button"
                            aria-label={`Excluir ${entry.title}`}
                            onClick={(event) =>
                              handleDeleteContent(entry.id, event.currentTarget)
                            }
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      <p>{type?.label || entry.type}</p>
                      {entry.tags.length > 0 && (
                        <p className="Materia-content-tags">
                          <strong>Tags:</strong> {entry.tags.join(', ')}
                        </p>
                      )}
                      {entry.link && (
                        safeUrl ? (
                          <a
                            className="Materia-content-link"
                            href={safeUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {entry.link}
                          </a>
                        ) : (
                          <p className="Materia-content-link">
                            <strong>Link:</strong> {entry.link}
                          </p>
                        )
                      )}
                    </li>
                  );
                })}
              </ul>
                ) : (
                  <p>Ainda não há conteúdos cadastrados para este assunto.</p>
                )}
              </>
            )}
          </section>
        </section>

        <aside className="Materia-sidebar" aria-label="Subcategorias">
          <h2>
            {subcategoriaAtual
              ? `Especialidades de ${subcategoriaAtual.name}`
              : `Subcategorias de ${materiaAtual.name}`}
          </h2>
          {subcategoriaAtual ? (
            subcategoriaAtual.specialties.length > 0 ? (
              <ul className="Materia-specialty-list">
                {subcategoriaAtual.specialties.map((item) => {
                  const itemSlug = createSlug(item);
                  return (
                    <li key={item}>
                      <Link
                        className={`Materia-subcategory-link ${specialty === itemSlug ? 'is-active' : ''}`.trim()}
                        to={`${subcategoriaPath}/${itemSlug}`}
                        aria-current={specialty === itemSlug ? 'page' : undefined}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Esta subcategoria ainda não possui itens cadastrados.</p>
            )
          ) : (
            <ul className="Materia-subcategory-list">
              {subcategorias.map((item) => (
                <li key={item.name}>
                  <Link
                    className="Materia-subcategory-link"
                    to={`${materiaPath}/${createSlug(item.name)}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
      {reportTarget && (
        <ContentReportDialog
          entry={reportTarget.entry}
          subjectName={reportTarget.subjectName}
          onClose={closeReportDialog}
        />
      )}
      {deleteTarget && (
        <div
          className="content-delete-dialog-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setDeleteTarget(null);
            }
          }}
        >
          <section
            aria-describedby="content-delete-description"
            aria-labelledby="content-delete-title"
            aria-modal="true"
            className="content-delete-dialog"
            ref={deleteDialogRef}
            role="alertdialog"
            tabIndex="-1"
          >
            <h2 id="content-delete-title">Excluir conteúdo?</h2>
            <p id="content-delete-description">
              Tem certeza que deseja excluir “{deleteTarget.title}”?
            </p>
            {deleteError && <p className="content-delete-error" role="alert">{deleteError}</p>}
            <div className="content-delete-dialog-actions">
              <button
                className="content-delete-cancel"
                type="button"
                onClick={() => setDeleteTarget(null)}
              >
                Cancelar
              </button>
              <button
                className="content-delete-confirm"
                type="button"
                onClick={confirmDeleteContent}
              >
                Excluir conteúdo
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default VerMateria;