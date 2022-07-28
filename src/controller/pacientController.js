/* routes/function:
- POST: /pacient/create - > createUserPacient
- POST: /pacient/login - > pacientLogin

*/
const PacientUser = require('../models/pacientModel')
const volunteerUser = require('../models/volunteerModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const {
    auth
} = require("./autenticacao");
const db = require('../database/mongooseConnect')



const createUserPacient = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)

    console.log('minha senha sem hash: ', req.body.senha)
    console.log('minha senha com hash: ', senhaComHash)

    req.body.senha = senhaComHash

    console.log('meu body.senha atualizado: ', req.body.senha)

    const pacientUser = new PacientUser(req.body)
    pacientUser.save(function (err) {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        res.status(201).send(pacientUser)
    })
}

const pacientLogin = (req, res) => {
    PacientUser.findOne({
        email: req.body.email
    }, function (error, pacient) {
        if (error) {
            return res.status(500).send({
                message: 'Erro!'
            })
        }
        if (!pacient) {
            return res.status(404).send("Não existe usuário com este email!")
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, pacient.senha)

        if (!senhaValida) {
            return res.status(403).send("Senha incorreta. Tente novamente")
        }

        const token = jwt.sign({
            email: req.body.email
        }, SECRET)
        return res.status(200).send(token)
    })
}




// Resta implementar auth com login de Volunteer
const getListPacients = async (req, res) => {
    try {
        const listPacients = await PacientUser.find({}, {
            "nome": 1,
            "email": 1,
            "disponibilidade": 1
        })
        res.status(200).json({
            message: "Lista de pacientes cadastrados: ",
            listPacients
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


// autenticação de rota falta - getTriageInfo
const getTriageInfoId = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Token inválido!");
        }
        const id = req.params.id;
        PacientUser.findById(id, (err, pacient) => {
            if (err) {
                res.status(424).send({
                    message: err.message
                });
            } else if (pacient) {
                return res.status(200).send(pacient);
            }
            res.status(404).send("Paciente não encontrado!");
        });
    })
};



const updateUserPacient = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Token inválido!");
        }
        const id = req.params.id;
        const updatePacient = req.body;
        PacientUser.findByIdAndUpdate(id, updatePacient, (err, pacient) => {
            if (err) {
                return res.status(424).send({
                    message: err.message
                });
            } else if (pacient) {
                return res.status(200).send("Atualizado com sucesso!");
            }
            res.status(404).send("Informacao não encontrada");
        });
    });
};

const deletePacient = async (req, res) => {
    try {
        const token = auth(req, res)
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("Erro de acesso")
            }
            const {
                id
            } = req.params
            await PacientUser.findByIdAndDelete(id)
            const message = `O usuario pacient com o id: ${id} foi deletado com sucesso!`
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
    createUserPacient,
    pacientLogin,
    getListPacients,
    getTriageInfoId,
    updateUserPacient,
    deletePacient
}