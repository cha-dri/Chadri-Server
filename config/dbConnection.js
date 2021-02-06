import mongoose from 'mongoose';

const connect = () => {
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true);
	}
}
mongoose.connect(`${process.env.MONGO_URI}`, {
	dbName: 'chadri',
	useNewUrlParser: true,
	useCreateIndex: true, 
	useUnifiedTopology: true
}, (err) => {
	if (err) {
		console.log('connetction error: ', err);
	} else {
		console.log('connection success!');
	}
});

mongoose.connection.on('error', (err) => {
	console.error('connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
	console.error('connection disconnected');
	connect();
});

export default connect;
