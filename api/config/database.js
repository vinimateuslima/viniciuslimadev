const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.tiwbjbn.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
    
    await mongoose.connect(mongoURI);

    console.log('✅ MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
