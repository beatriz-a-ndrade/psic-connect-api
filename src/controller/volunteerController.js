/* routes/function:
- POST: /volunteer/create - > createUserVolunteer
- POST: /volunteer/login - > volunteerLogin

*/
const VolunteerUser = require('../models/volunteerModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const {
    auth
} = require("./autenticacao");


const createUserVolunteer = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)

    console.log('minha senha sem hash: ', req.body.senha)
    console.log('minha senha com hash: ', senhaComHash)

    req.body.senha = senhaComHash

    console.log('meu body.senha atualizado: ', req.body.senha)

    const volunteerUser = new VolunteerUser(req.body)
    volunteerUser.save(function (err) {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        res.status(201).send(volunteerUser)
    })
}


const volunteerLogin = (req, res) => {
    VolunteerUser.findOne({
        crp: req.body.crp
    }, function (error, volunteer) {
        if (error) {
            return res.status(500).send({
                message: 'Erro!'
            })
        }
        if (!volunteer) {
            return res.status(404).send("Usuário não encontrado!")
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, volunteer.senha)

        if (!senhaValida) {
            return res.status(403).send("Senha incorreta. Tente novamente")
        }

        const token = jwt.sign({
            email: req.body.email
        }, SECRET)
        return res.status(200).send(token)
    })
}

const getAllVolunteers = async (req, res) => {
    try {
        const volunteer = await VolunteerUser.find({}, {
            senha: 0
        })
        res.status(200).json({
            message: "Volutários cadastrados : ",
            volunteer
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Preciso implementar auth para só acessar fazendo login com senha
const getVolunteersDisp = async (req, res) => {
    try {
        const listVolunteers = await VolunteerUser.find({
            disponivel: true
        }, {
            "nome": 1,
            "idade": 1,
            "CRP": 1,
            "email": 1,
            "disponibilidade": 1,
            "experienciaclinica": 1,
            "idgenero":1,
            "etnia":1
        })
        res.status(200).json({
            message: "Lista de psicologos voluntários cadastrados disponíveis : ",
            listVolunteers
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getVolunteerId = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Token inválido!");
        }
        const id = req.params.id;
        VolunteerUser.findById(id, (err, volunteer) => {
            if (err) {
                res.status(424).send({
                    message: err.message
                });
            } else if (volunteer) {
                return res.status(200).send(volunteer);
            }
            res.status(404).send("Psicologo voluntário não encontrado!");
        });
    })
};

const updateUserVolunteer = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Token inválido!");
        }
        const id = req.params.id;
        const updateVolunteer = req.body;
        VolunteerUser.findByIdAndUpdate(id, updateVolunteer, (err, volunteer) => {
            if (err) {
                return res.status(424).send({
                    message: err.message
                });
            } else if (volunteer) {
                return res.status(200).send("Atualizado com sucesso!");
            }
            res.status(404).send("Informacao não encontrada");
        });
    });
};


const deleteVolunteer = async (req, res) => {
    try {
        const token = auth(req, res)
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                res.status(403).send("Erro de acesso")
            }
            const {
                id
            } = req.params
            await VolunteerUser.findByIdAndDelete(id)
            const message = `O usuario volunteer com o id: ${id} foi deletado com sucesso!`
            res.status(200).json({
                message
            })
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    createUserVolunteer,
    volunteerLogin,
    getAllVolunteers,
    getVolunteersDisp,
    getVolunteerId,
    updateUserVolunteer,
    deleteVolunteer
}