const pacientModel = require("../src/models/pacientModel")

describe("GET route test", () => {
    const pacient = new pacientModel({
        "nome": "pacient teste",
        "email": "email teste",
        "jaconseguiuatendimento": false
    });
    it("Deve chamar o schema e retornar o nome correto do pacient", () => {
        expect(pacient.nome).toBe("pacient teste");
    });
    it("Deve chamar o schema e retornar o email correto do pacient", () => {
        expect(pacient.email).toBe("email teste");
    });
    it("Deve chamar o schema e retornar o valor se ja conseguiu atendimento como False", () => {
        expect(pacient.jaconseguiuatendimento).toBe(false);
    });
});

describe("CREATE route test", () => {
    const pacient = new pacientModel({
            "nome": "Beatriz Ribeiro de Andrade",
            "idade": 27,
            "estadocidade": "Montanhas Doces, XX",
            "idgenero": "ela",
            "etnia": "branca",
            "rendamedia": 300,
            "email": "arrobateste@reprograma.com",
            "contato": 9988776622,
            "motivacao": "Vontade demais de dormir",
            "jaconseguiuatendimento": true,
            "tempoespera": 20,
            "disponibilidade": "quinta-feiras à tarde",
            "ocupacao": "artista plástica",
            "senha": "abacaxiazedo123"
    });
    it("Deve salvar no banco de dados o novo cadastro de Pacient", () => {
        pacient.save().then((cadastro) => {
            expect(cadastro.nome).toBe("Beatriz Ribeiro de Andrade");
        });
    });
})


describe("UPDATE route test", () => {
    it("Deve editar se ja esta em atendimento e salvar no banco de dados o novo status", () => {
        const pacient = new pacientModel({
             "nome": "Beatriz Ribeiro de Andrade",
             "idade": 27,
             "estadocidade": "Montanhas Doces, XX",
             "idgenero": "ela",
             "etnia": "branca",
             "rendamedia": 300,
             "email": "arrobateste@reprograma.com",
             "contato": 9988776622,
             "motivacao": "Vontade demais de dormir",
             "jaconseguiuatendimento": true,
             "tempoespera": 20,
             "disponibilidade": "quinta-feiras à tarde",
             "ocupacao": "artista plástica",
             "senha": "abacaxiazedo123"
        });
        pacient.jaconseguiuatendimento = false
        pacient.save().then((cadastro) => {
            expect(cadastro.jaconseguiuatendimento).toBe(false);
        });
    });
})


describe("DELETE route test", () => {
    it("Deve excluir o usuario pacient", () => {
        const pacient = new pacientModel({
               "nome": "Beatriz Ribeiro de Andrade",
               "idade": 27,
               "estadocidade": "Montanhas Doces, XX",
               "idgenero": "ela",
               "etnia": "branca",
               "rendamedia": 300,
               "email": "arrobateste@reprograma.com",
               "contato": 9988776622,
               "motivacao": "Vontade demais de dormir",
               "jaconseguiuatendimento": true,
               "tempoespera": 20,
               "disponibilidade": "quinta-feiras à tarde",
               "ocupacao": "artista plástica",
               "senha": "abacaxiazedo123"
        });
        pacient.save().then((cadastro) => {
            pacient.delete().then((newcadastro) => {
                expect(cadastro.email).toBe(null);
            })
        });
    });
})