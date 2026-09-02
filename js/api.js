const api = {
    // asyn - declarando método assíncrono
    async buscarPensamentos() {
        // Tratando erro
        try {
            // fetch() -  função nativa usada para fazer requisições HTTP de forma assíncrona
            // await - pausa a execução da função até que uma tarefa termine
            const response = await fetch('http://localhost:3000/pensamentos'); // GET - Pegar
            return await response.json(); // Converte os dados para o formato JSON
        } catch (error) {
            alert('Erro ao buscar pensamentos.');
            throw error;
        }
    },

    async salvarPensamento(pensamento) {
      try {
         const response = await fetch('http://localhost:3000/pensamentos', {
            method: "POST", // Enviar informação
            headers: {
               "Content-Type": "application/json" // informando o tipo de conteúdo
            },
            body: JSON.stringify(pensamento) // converte de obj p json
         });
      } catch (error) {
         alert('Erro ao buscar pensamentos.');
         throw error;
      }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            return await response.json();
        } catch (error) {
            alert('Erro ao salvar pensamento.');
            throw error;
        }
    },

    async editarPensamento(pensamento) {
      try {
         const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
            method: "PUT", // editar
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(pensamento)
         });
      } catch (error) {
         alert('Erro ao editar pensamentos.');
         throw error;
      }
    },

    async excluirPensamento(id) {
      try {
         const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
            method: "DELETE", // excluir
         });
      } catch (error) {
         alert('Erro ao excluir um pensamentos.');
         throw error;
      }
    }
};

export default api; // exportando variável api