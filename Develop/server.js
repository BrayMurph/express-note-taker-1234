const PORT = process.env.PORT || 3001;
const app = express();
const express = require("express");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
});
