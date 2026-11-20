import { Categorias, ConteudoTipos } from './Database';

function IncorrectContentReviewDialog({
  entry,
  values,
  incorrectFields,
  dialogRef,
  onValueChange,
  onToggleIncorrectField,
  onBack,
}) {
  const selectedCategory = Categorias.find((category) => category.value === values.category);
  const subcategories = selectedCategory?.subcategorias || [];
  const selectedSubcategory = subcategories.find(
    (subcategory) => subcategory.value === values.subcategory
  );
  const subcategories2 = selectedSubcategory?.subcategorias2 || [];
  const originalSubcategory2 = entry.subcategory2 || entry.specialty || '';

  function renderOptions(options, value, originalValue) {
    let optionsWithFallbacks = [...options];
    if (originalValue && !optionsWithFallbacks.some((option) => option.value === originalValue)) {
      optionsWithFallbacks = [{ value: originalValue, label: originalValue }, ...optionsWithFallbacks];
    }

    if (value && !optionsWithFallbacks.some((option) => option.value === value)) {
      optionsWithFallbacks = [{ value, label: value }, ...optionsWithFallbacks];
    }

    return optionsWithFallbacks;
  }

  function renderReadOnlyField(field, label, value) {
    const isIncorrect = incorrectFields.includes(field);
    const inputId = `moderation-review-${field}`;

    return (
      <div
        className={`moderation-review-field ${isIncorrect ? 'is-incorrect' : ''}`}
        key={field}
      >
        <label className="moderation-review-label" htmlFor={inputId}>{label}</label>
        <div className="moderation-review-input-row">
          <input
            id={inputId}
            className="moderation-review-input"
            type="text"
            value={value}
            readOnly
          />
          <button
            type="button"
            className={`moderation-review-alert ${isIncorrect ? 'is-active' : ''}`}
            aria-label={`${isIncorrect ? 'Desmarcar' : 'Marcar'} ${label} como incorreto`}
            aria-pressed={isIncorrect}
            onClick={() => onToggleIncorrectField(field)}
          >
            !
          </button>
        </div>
      </div>
    );
  }

  function renderSelectField(field, label, options, placeholder, disabled = false) {
    const originalValue = field === 'subcategory2'
      ? originalSubcategory2
      : entry[field];
    const isChanged = values[field] !== originalValue;
    const selectId = `moderation-review-${field}`;

    return (
      <div
        className={`moderation-review-field ${isChanged ? 'is-changed' : ''}`}
        key={field}
      >
        <label className="moderation-review-label" htmlFor={selectId}>{label}</label>
        <select
          id={selectId}
          className="moderation-review-select"
          value={values[field]}
          onChange={(event) => {
            const value = event.target.value;
            if (field === 'category') {
              const isOriginalCategory = value === entry.category;
              onValueChange('category', value);
              onValueChange('subcategory', isOriginalCategory ? entry.subcategory : '');
              onValueChange('subcategory2', isOriginalCategory ? originalSubcategory2 : '');
              return;
            }

            if (field === 'subcategory') {
              const isOriginalSubcategory =
                values.category === entry.category && value === entry.subcategory;
              onValueChange('subcategory', value);
              onValueChange('subcategory2', isOriginalSubcategory ? originalSubcategory2 : '');
              return;
            }

            onValueChange(field, value);
          }}
          disabled={disabled}
        >
          <option value="">{placeholder}</option>
          {renderOptions(options, values[field], originalValue).map((option) => {
            const isOriginalOption = isChanged && option.value === originalValue;
            return (
              <option
                key={option.value}
                value={option.value}
                className={isOriginalOption ? 'moderation-review-original-option' : ''}
              >
                {isOriginalOption ? `${option.label} (original)` : option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  return (
    <div
      className="moderation-review-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onBack();
        }
      }}
    >
      <section
        className="moderation-review-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="moderation-review-heading"
        tabIndex="-1"
        ref={dialogRef}
      >
        <h2 id="moderation-review-heading">Revisar informações do conteúdo</h2>
        <p>Os campos de texto são somente para leitura. Use os alertas ou o “×” das tags para marcar dados incorretos; os menus podem ser alterados para comparação.</p>

        <div className="moderation-review-form">
          {renderReadOnlyField('title', 'Título', values.title)}
          {renderSelectField(
            'type',
            'Conteúdo',
            ConteudoTipos,
            'Selecione o tipo'
          )}
          {renderSelectField(
            'category',
            'Categoria',
            Categorias,
            'Selecione a categoria'
          )}
          {renderSelectField(
            'subcategory',
            'Subcategoria',
            subcategories,
            'Selecione a subcategoria',
            !values.category
          )}
          {renderSelectField(
            'subcategory2',
            'Subcategoria 2',
            subcategories2,
            'Selecione a subcategoria 2',
            !values.subcategory || subcategories2.length === 0
          )}
          {renderReadOnlyField('link', 'Link', values.link)}
          <div className="moderation-review-field moderation-review-tags-field">
            <span className="moderation-review-label">Tags</span>
            {values.tags.length > 0 ? (
              <ul className="moderation-review-tags">
                {values.tags.map((tag, index) => {
                  const field = `tag:${index}`;
                  const isIncorrect = incorrectFields.includes(field);
                  return (
                    <li
                      className={`moderation-review-tag ${isIncorrect ? 'is-incorrect' : ''}`}
                      key={`${tag}-${index}`}
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        className="moderation-review-tag-remove"
                        aria-label={`${isIncorrect ? 'Desmarcar' : 'Marcar'} tag ${tag} como incorreta`}
                        aria-pressed={isIncorrect}
                        onClick={() => onToggleIncorrectField(field)}
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="moderation-review-empty-tags">Nenhuma tag informada.</p>
            )}
          </div>
        </div>

        <div className="moderation-review-actions">
          <button type="button" onClick={onBack}>Voltar aos motivos</button>
        </div>
      </section>
    </div>
  );
}

export default IncorrectContentReviewDialog;
