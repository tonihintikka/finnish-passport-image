const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Käytä ympäristömuuttujan määrittelemää porttia tai 3000, jos PORT ei ole määritelty

app.use(express.static('public')); // olettaen, että sinulla on "public" hakemisto staattisille tiedostoille

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Sovellus kuuntelee portissa http://localhost:${port}`);
});
