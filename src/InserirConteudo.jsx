import React, { useState, useRef } from 'react';
import './component/css/inserir-conteudo.css';
import { Categorias, ConteudoTipos } from './component/Database';
import { saveContentEntry } from './component/contentRegistry';

function InserirConteudo({ isPopup = false, onClose }) {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState(ConteudoTipos[0].value);
  const [categoria, setCategoria] = useState('');
  const [subcategoria, setSubcategoria] = useState('');
  const [subcategoria2, setSubcategoria2] = useState('');
  const [link, setLink] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const tagInputRef = useRef(null);

  const selectedCategoryObj = Categorias.find((cat) => cat.value === categoria);
  const subcategoriasDisponiveis = selectedCategoryObj?.subcategorias || [];
  const selectedSubcategoryObj = subcategoriasDisponiveis.find(
    (sub) => sub.value === subcategoria
  );
  const subcategorias2Disponiveis = selectedSubcategoryObj?.subcategorias2 || [];

  function handleCategoriaChange(e) {
    setCategoria(e.target.value);
    setSubcategoria('');
    setSubcategoria2('');
  }

  function adicionarTag() {
    const valor = tagInput.trim();
    const jaExiste = tags.some(
      (t) => t.toLowerCase() === valor.toLowerCase()
    );

    if (valor && !jaExiste) {
      setTags([...tags, valor]);
    }

    setTagInput('');
    tagInputRef.current?.focus();
  }

  function removerTag(tagParaRemover) {
    setTags(tags.filter((t) => t !== tagParaRemover));
    tagInputRef.current?.focus();
  }

  function handleTagKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      adicionarTag();
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setTitulo('');
    setConteudo(ConteudoTipos[0].value);
    setCategoria('');
    setSubcategoria('');
    setSubcategoria2('');
    setLink('');
    setTagInput('');
    setTags([]);
    setSubmitError('');
    setSubmitSuccess('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      saveContentEntry({
        title: titulo.trim(),
        type: conteudo,
        category: categoria,
        subcategory: subcategoria,
        subcategory2: subcategoria2,
        link: link.trim(),
        tags,
        createdAt: new Date().toISOString(),
      });
      setSubmitError('');
      setSubmitSuccess('Conteúdo enviado para moderação.');
    } catch (error) {
      console.error('Não foi possível cadastrar o conteúdo.', error);
      setSubmitSuccess('');
      setSubmitError('Não foi possível cadastrar o conteúdo. Tente novamente.');
    }
  }

  const contentPanel = (
    <main className="panel">
      <h1 className="panel__title" id="content-entry-title">Enviar conteúdo educacional</h1>

        <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
          {submitError && <p className="form__message form__message--error" role="alert">{submitError}</p>}
          {submitSuccess && <p className="form__message form__message--success" role="status">{submitSuccess}</p>}
          <div className="form__group">
            <label className="form__label" htmlFor="titulo">
              Título
            </label>
            <input
              className="form__input"
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="conteudo">
              Conteúdo
            </label>
            <select
              className="form__select"
              id="conteudo"
              name="conteudo"
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            >
              {ConteudoTipos.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="categoria">
              Categoria
            </label>
            <select
              className="form__select"
              id="categoria"
              name="categoria"
              value={categoria}
              onChange={handleCategoriaChange}
              required
            >
              <option value="" disabled hidden>
                Selecione a categoria
              </option>
              {Categorias.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form__group">
            <select
              className="form__select"
              id="subcategoria"
              name="subcategoria"
              aria-label="Subcategoria"
              value={subcategoria}
              onChange={(e) => {
                setSubcategoria(e.target.value);
                setSubcategoria2('');
              }}
              disabled={!categoria}
              required
            >
              <option value="" disabled hidden>
                Subcategoria 1
              </option>
              {subcategoriasDisponiveis.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form__group">
            
            <select
              className="form__select"
              id="subcategoria2"
              name="subcategoria2"
              value={subcategoria2}
              onChange={(e) => setSubcategoria2(e.target.value)}
              disabled={!subcategoria || subcategorias2Disponiveis.length === 0}
              required={subcategorias2Disponiveis.length > 0}
            >
              <option value="" disabled hidden>
                {!subcategoria
                  ? 'Especialidade'
                  : subcategorias2Disponiveis.length > 0
                    ? 'Selecione a subcategoria 2'
                    : 'Nenhuma subcategoria disponível'}
              </option>
              {subcategorias2Disponiveis.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="link">
              Link
            </label>
            <input
              className="form__input"
              type="url"
              id="link"
              name="link"
              placeholder="Insira o link aqui (ex: https://...)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="tag">
              Tags
            </label>
            <div className="tags__box">
              <input
                ref={tagInputRef}
                className="tags__input"
                type="text"
                id="tag"
                maxLength={20}
                autoComplete="off"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
              />
              <button
                className="tags__add"
                id="tag-add"
                type="button"
                aria-label="Adicionar tag"
                onClick={adicionarTag}
              >
                +
              </button>
            </div>

            <ul className="tags__list" id="tag-list">
              {tags.map((tag) => (
                <li key={tag} className="tags__item">
                  <span>{tag}</span>
                  <button
                    type="button"
                    className="tags__remove"
                    aria-label={`Remover tag ${tag}`}
                    onClick={() => removerTag(tag)}
                  >
                    ×
                  </button>
                  <input type="hidden" name="tags" value={tag} />
                </li>
              ))}
            </ul>
          </div>

          <div className="form__actions">
            <button className="btn btn--cancel" type="reset">
              Cancelar
            </button>
            <button className="btn btn--submit" type="submit">
              Enviar conteúdo
            </button>
          </div>
        </form>
    </main>
  );

  if (isPopup) {
    return (
      <div
        className="content-entry-modal"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose?.();
          }
        }}
      >
        <section
          className="content-entry-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="content-entry-title"
        >
          <button
            type="button"
            className="content-entry-modal__close"
            aria-label="Fechar formulário"
            onClick={() => onClose?.()}
          >
            ×
          </button>
          {contentPanel}
        </section>
      </div>
    );
  }

  return <div className="page content-entry-page">{contentPanel}</div>;
}

export default InserirConteudo