import express from 'express';
import cors from 'cors';
import employee from './Router/employee.router.js'

const app = express();

const PORT = 4000;

app.use(cors());

app.u  se(express.json())


app.use('/api/employees',employee)


app.listen(PORT, () => {
    
console.log("app is listening on the PORT>>>>>",PORT);

})


