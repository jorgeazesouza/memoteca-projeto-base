import ui from './ui.js';
import api from './api.js';

// adicionar um evento quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', () => {
   ui.renderizarPensamentos(); // renderizando pensamentos na pagina
   
   const formularioPensamento = document.querySelector('#pensamento-form');
   formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario);

   const btnCancelar = document.querySelector('#botao-cancelar');
   btnCancelar.addEventListener('click', manipularCancelamento);
});

async function manipularSubmissaoFormulario(event) {
   event.preventDefault();
   const id = document.querySelector('#pensamento-id').value;
   const conteudo = document.querySelector('#pensamento-conteudo').value;
   const autoria = document.querySelector('#pensamento-autoria').value;

   try {
      if (id) {
         await api.editarPensamento({ id, conteudo, autoria });
      } else {
         await api.salvarPensamento({ conteudo, autoria });
      }
      ui.renderizarPensamentos();
   } catch (error) {
      alert('Erro ao adicionar pensamentos');
   }
   ui.limparFormulario();
}

function manipularCancelamento() {
   ui.limparFormulario();
}