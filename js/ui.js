import api from './api.js'; // importando api

const ui = {
   async renderizarPensamentos() {
      // armazendo ul do html
      const listaPensamentos = document.querySelector('#lista-pensamentos');

      try {
         // armazenando arquivo JSON
         const pensamentos = await api.buscarPensamentos();
         // criando cada pensamento do JSON no html
         pensamentos.forEach(pensamento => {
            listaPensamentos.innerHTML += `
               <li class="li-pensamento" data-id="${pensamento.id}">
               <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
               <div class="pensamento-conteudo">${pensamento.conteudo}</div>
               <div class="pensamento-autoria">${pensamento.autoria}</div>
               </li>
            `;
         });
      } catch (error) {
         alert('Erro ao renderizar pensamentos');
      }
   }
};

export default ui;