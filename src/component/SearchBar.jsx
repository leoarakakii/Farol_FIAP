import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/style.css';
import { dataSets } from './Database';


function SearchBar({
  categoria,
  page,
  initialValue,
  label = 'O que você precisa estudar?',
  placeholder = 'Buscar...',
  onSelect,
  className = '',
}) {
  const [query, setQuery] = useState(initialValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialValue !== undefined) {
      setQuery(initialValue);
    }
  }, [initialValue]);

  const normalize = (value) =>
    value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const normalizedQuery = normalize(query);
  const matchesQuery = (value) => normalize(value).includes(normalizedQuery);
  const filteredItems = (dataSets[categoria] || []).flatMap((item) => {
    const results = [];
    const subcategories = item.subcategories || [];

    if (matchesQuery(item.name) || matchesQuery(item.category || '')) {
      results.push({ subject: item, label: item.name });
    }

    subcategories.forEach((subcategory) => {
      if (matchesQuery(subcategory.name)) {
        results.push({
          subject: item,
          label: `${item.name} — ${subcategory.name}`,
        });
      }

      (subcategory.specialties || []).forEach((specialty) => {
        if (matchesQuery(specialty)) {
          results.push({
            subject: item,
            label: `${item.name} — ${subcategory.name} — ${specialty}`,
          });
        }
      });
    });

    return results;
  });

  const handleSelect = (item) => {
    setQuery(item.slug);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
      return;
    }

    const destination = page || categoria;
    navigate(`/${destination}/${encodeURIComponent(item.slug)}`);
  };

  return (
    <div className={`Search-bar-wrapper ${className} ${isOpen && query.length > 0 ? 'is-open' : ''}`.trim()}>
      <div>
        <div>{label}</div>
        <div className="Search-input-wrapper">
          <input
            placeholder={placeholder}
            value={query}
            name="search"
            type="search"
            autoComplete="off"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="search-results"
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            className="Search-bar"
          />
          {query && (
            <button
              type="button"
              className="Search-clear-btn"
              aria-label="Limpar busca"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
            >
              ✕
            </button>
          )}
          {isOpen && query.length > 0 && (
            <ul className="dropdown-menu" id="search-results">
              {filteredItems.length > 0 ? (
                filteredItems.map((result, index) => (
                  <li
                    key={`${result.subject.id}-${result.label}-${index}`}
                    className="dropdown-item"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleSelect(result.subject)}
                  >
                    {result.label}
                  </li>
                ))
              ) : (
                <li className="dropdown-item no-results">No results found</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;