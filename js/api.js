const api = {
    // asyn - declarando método assíncrono
    async buscarPensamentos() {
        // Tratando erro
        try {
            // fetch() -  função nativa usada para fazer requisições HTTP de forma assíncrona
            // await - pausa a execução da função até que uma tarefa termine
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json(); // Converte os dados para o formato JSON
        } catch (error) {
            alert('Erro ao buscar pensamentos.');
            throw error;
        }
    }
};

export default api; // exportando variável api