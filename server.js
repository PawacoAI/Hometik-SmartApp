const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const deviceRoutes = require('./routes/device');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', deviceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
