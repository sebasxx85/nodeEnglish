import mongoose from 'mongoose';
import { users } from '/users.js'; // tu archivo actual con los usuarios

const MONGO_URI = 'mongodb://127.0.0.1:27017/englishdb';

const userSchema = new mongoose.Schema({
  name: String,
  score: Number,
  language: String,
  avatar: String,
  password: String
});

const User = mongoose.model('User', userSchema);

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB');

    await User.deleteMany(); // Limpia la colección si ya hay datos
    const inserted = await User.insertMany(users);

    console.log(`🎉 ${inserted.length} usuarios insertados`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error al conectar o insertar:', err);
    mongoose.connection.close();
  });
