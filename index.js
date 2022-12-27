const express = require('express');

const app = express();

const PORT = process.env.PORT || 6969; //"process.env.PORT" is optional. i don't understand really what it is used for but put it! what do i have to lose anyway?
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
