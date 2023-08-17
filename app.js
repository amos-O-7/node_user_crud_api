const express = require('express');
const app = express();
const sequelize = require('./database'); // Use the correct relative path
const User = require('./model'); // Import the User model

app.use(express.json());

app.get("/status", (req, res) => {
    const status = {
        "status": "running",
        "user_name": "amos"
    };

    res.json(status); // Changed to res.json()
});

app.delete("/users/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        const userToDelete = await User.findByPk(userId);
        if (!userToDelete) {
            return res.status(404).json({ error: "User not found" });
        }

        await userToDelete.destroy();
        res.status(204).send(); // Send a successful response with no content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/users", async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/users/:userId", async (req, res) => {
    const userId = req.params.userId;
    const updatedData = req.body;

    try {
        const userToUpdate = await User.findByPk(userId);
        if (!userToUpdate) {
            return res.status(404).json({ error: "User not found" });
        }

        await userToUpdate.update(updatedData);
        const updatedUser = await User.findByPk(userId);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



app.post("/users", async (req, res) => { // Changed endpoint to "/users"
    const newUser = req.body;

    try {
        const createdUser = await User.create(newUser); // Use a different variable name
        res.status(201).json(createdUser); // Use the variable createdUser
    } catch (error) {
        res.status(400).json({ error: error.message }); // Changed to res.status(400).json()
    }
});

const PORT = process.env.PORT || 3000;
// sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server Listening on PORT:", PORT);
    });
// });
