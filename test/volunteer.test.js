const volunteerModel = require("../src/models/volunteerModel")

describe("GET route test", () => {
    const volunteer = new volunteerModel({
        "nome": "volunteer teste",
        "email": "email@teste",
        "disponivel": true
    });
    it("Deve chamar o schema e retornar o nome correto do volunteer", () => {
        expect(volunteer.nome).toBe("volunteer teste");
    });
    it("Deve chamar o schema e retornar o email correto do volunteer", () => {
        expect(volunteer.email).toBe("email@teste");
    });
    it("Deve chamar o schema e retornar o valor se esta disponivel para atendimento como Verdadeira", () => {
        expect(volunteer.disponivel).toBe(true);
    });
});

describe("CREATE route test", () => {
    const volunteer = new volunteerModel({
        "nome": "Severino de Qualquer Um",
        "idade": 34,
        "estadocidade": "Montanhas Salgadas, ZZ",
        "idgenero": "ele",
        "etnia": "negro",
        "crp": "12384372",
        "email": "arrobateste7@reprograma.com",
        "contato": 9988776622,
        "experienciaclinica": "2 anos de experiencia atuando em ongs e etc e tal",
        "disponibilidade": "sabados a tarde",
        "disponivel": true,
        "senha": "milkshake2020"
    });
    it("Deve salvar no banco de dados o novo cadastro de Volunteer", () => {
        volunteer.save().then((cadastro) => {
            expect(cadastro.disponivel).toBe(true);
        });
    });
})


describe("UPDATE route test", () => {
    it("Deve editar se ja esta disponivel e salvar no banco de dados o novo status", () => {
        const volunteer = new volunteerModel({
               "nome": "Severino de Qualquer Um",
               "idade": 34,
               "estadocidade": "Montanhas Salgadas, ZZ",
               "idgenero": "ele",
               "etnia": "negro",
               "crp": "12384372",
               "email": "arrobateste7@reprograma.com",
               "contato": 9988776622,
               "experienciaclinica": "2 anos de experiencia atuando em ongs e etc e tal",
               "disponibilidade": "sabados a tarde",
               "disponivel": true,
               "senha": "milkshake2020"
        });
        volunteer.disponivel = false
        volunteer.save().then((cadastro) => {
            expect(cadastro.disponivel).toBe(false);
        });
    });
})


describe("DELETE route test", () => {
    it("Deve excluir o usuario volunteer", () => {
        const volunteer = new volunteerModel({
            "nome": "Severino de Qualquer Um",
            "idade": 34,
            "estadocidade": "Montanhas Salgadas, ZZ",
            "idgenero": "ele",
            "etnia": "negro",
            "crp": "12384372",
            "email": "arrobateste7@reprograma.com",
            "contato": 9988776622,
            "experienciaclinica": "2 anos de experiencia atuando em ongs e etc e tal",
            "disponibilidade": "sabados a tarde",
            "disponivel": true,
            "senha": "milkshake2020"
        });
        volunteer.save().then((cadastro) => {
            volunteer.delete().then((newcadastro) => {
                expect(cadastro.email).toBe(null);
            })
        });
    });
})