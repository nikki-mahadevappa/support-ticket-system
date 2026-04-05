const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const ticketRoutes = require("./routes/ticketRoutes");

app.use("/api/tickets", ticketRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));