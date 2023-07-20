import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'next-auth-template',
    }),
      console.log('MongiDB is connected');
  } catch (error) {
    console.log('error :>> ', error);
  }
};

// export async function connectDb() {
//   try {
//     mongoose.connect(process.env.MONGO_DB_URI);
//     const connection = mongoose.connection;

//     connection.on('connected', () => {
//       console.log('MongoDB connected successfully');
//     });

//     connection.on('error', (err) => {
//       console.log(
//         'MongoDB connection error. Please make sure MongoDB is running. ' + err
//       );
//       process.exit();
//     });
//   } catch (error) {
//     console.log('Something went wrong!');
//     console.log(error);
//   }
// }
