const app = require('./src/app.js');
const PORT = process.env.PORT 


app.listen(PORT, () => console.log(`Servidor funcionando na porta: ${PORT}`))