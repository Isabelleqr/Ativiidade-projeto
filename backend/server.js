// =====================================
//   NOSSA API MARVEL
//   Feita com Node.js + Express
// =====================================

// importar frameworks
const express = require("express");
const cors = require("cors");
const path = require("path");

// importar JSON com personagens
const marvel = require("./data/marvel.json");

// criar servidor
const app = express();
const PORT = 3000;

// habilitar CORS
app.use(cors());

// ====================================
// SERVIR IMAGENS
// ====================================

app.use(
    "/fotos",
    express.static(path.join(__dirname, "data/fotos"))
);

// ====================================
// FUNÇÃO PARA SORTEAR
// ====================================

function sortear(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// ====================================
// ROTA 1 — PERSONAGEM ALEATÓRIO
// ====================================

app.get("/api/marvel/aleatorio", (req, res) => {

    const todasAsFotos = Object.values(marvel).flat();

    const item = sortear(todasAsFotos);

    res.json({
        status: "success",
        imagem: `http://10.106.208.39:${PORT}/fotos/${item}`
    });

});

// ====================================
// ROTA 2 — PERSONAGEM ESPECÍFICO
// ====================================

app.get("/api/marvel/:personagem", (req, res) => {

    const personagem = req.params.personagem.toLowerCase();

    if (!marvel[personagem]) {

        return res.status(404).json({
            status: "error",
            message: `Personagem "${personagem}" não encontrado`
        });

    }

    const item = sortear(marvel[personagem]);

    res.json({
        status: "success",
        imagem: `http://10.106.208.39:${PORT}/fotos/${item}`
    });

});

// ====================================
// INICIAR SERVIDOR
// ====================================

app.listen(PORT, "0.0.0.0", () => {

    console.log("Servidor Marvel rodando!");
    console.log(`http://10.106.208.39:${PORT}/api/marvel/aleatorio`);

});
