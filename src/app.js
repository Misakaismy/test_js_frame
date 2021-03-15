import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import path from 'Path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import index from './routes/index';

const app = express();

require('doenv').config();

app.use(express.json)
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../view')));//路由
app.use(morgan('dev'));//看API正不正確
app.use(cors());//看哪裡要接

// 儲存機制設定
app.use(session({
    secret:process.env.APP_KEY,//密鑰
    resave:false,
    saveUninitialized:false,
}));

// 必須要有23~27行，才能執行
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', index);

//port rouge (1~65536)
//mssql port 1433

const server = http.createServer(app);

server.listen(3000);

server.on('listening',()=>{
    const address = server.address();
    console.log(`This server is on ${address.port}`)
});