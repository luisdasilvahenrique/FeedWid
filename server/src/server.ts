import  express  from "express";
import cors from "cors"
import { routes } from "./routes";

const app = express();

app.use(cors())//segurança de back-end contra front-end inadequados não o consumam
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("HTTP server running!");
});