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
    }
};

export default api; // exportando variável api