(function () {
  'use strict';

  var form = document.querySelector('.form');
  var categoria = document.getElementById('categoria');
  var subcategoria = document.getElementById('subcategoria');
  var placeholder = subcategoria.querySelector('option[value=""]');
  var todasSubcategorias = Array.prototype.slice.call(
    subcategoria.querySelectorAll('option[data-categoria]')
  );

  var tagInput = document.getElementById('tag');
  var tagAdd = document.getElementById('tag-add');
  var tagList = document.getElementById('tag-list');

  function atualizarSubcategorias() {
    var escolhida = categoria.value;

    subcategoria.innerHTML = '';
    subcategoria.appendChild(placeholder);
    placeholder.selected = true;

    todasSubcategorias.forEach(function (opcao) {
      if (opcao.getAttribute('data-categoria') === escolhida) {
        subcategoria.appendChild(opcao);
      }
    });

    subcategoria.disabled = !escolhida;
  }

  function tagExiste(valor) {
    return Array.prototype.some.call(tagList.children, function (item) {
      return item.getAttribute('data-tag').toLowerCase() === valor.toLowerCase();
    });
  }

  function criarTag(valor) {
    var item = document.createElement('li');
    item.className = 'tags__item';
    item.setAttribute('data-tag', valor);

    var texto = document.createElement('span');
    texto.textContent = valor;

    var remover = document.createElement('button');
    remover.type = 'button';
    remover.className = 'tags__remove';
    remover.textContent = '\u00D7';
    remover.setAttribute('aria-label', 'Remover tag ' + valor);
    remover.addEventListener('click', function () {
      item.remove();
      tagInput.focus();
    });

    var campo = document.createElement('input');
    campo.type = 'hidden';
    campo.name = 'tags';
    campo.value = valor;

    item.appendChild(texto);
    item.appendChild(remover);
    item.appendChild(campo);
    tagList.appendChild(item);
  }

  function adicionarTag() {
    var valor = tagInput.value.trim();
    if (valor && !tagExiste(valor)) {
      criarTag(valor);
    }
    tagInput.value = '';
    tagInput.focus();
  }

  categoria.addEventListener('change', atualizarSubcategorias);
  tagAdd.addEventListener('click', adicionarTag);

  tagInput.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
      evento.preventDefault();
      adicionarTag();
    }
  });

  form.addEventListener('reset', function () {
    tagList.innerHTML = '';
    setTimeout(atualizarSubcategorias, 0);
  });

  atualizarSubcategorias();
})();
