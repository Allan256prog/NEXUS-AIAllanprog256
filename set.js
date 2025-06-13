




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;https://nexus-aiallanprog25.onrender.com
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VTSkhIdjFOVWQ4M005K0VFekpXZ0p5MzB0ZDJ5ZWNRSjRndzJ5VVdIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkVXbUpIYTZyaU02ZzZEaWVFM3pIb2J4UENYTGxSSUNjTFdZMElYZUNUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TUVsK0NKQzBhNFNQbWk1UmdNWmk4V0p2UXd4NzVQQkZwUldoSEl4OEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RHRqNTB3MHpuNitLUWorbEZIN2FXVk1mcEZqQWFKRS8zRHA3eGg3T0J3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktMbXQrQUVVN2FDMnRSSlFzUXdUa3cycVVVTUNQL3loV3M2NzBiWUFWMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOcm45czNRQ1lHVnpOZ3VPc2tEUC9wWmJGKyt6OVRMcHA1dmdCZEgwbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVxQlJqaGRlTWJBaXVJMzlYWUl6eWNTRFRRTUhtYm1WcmZINXpQODZFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE1cUZzYk81UmhtR2t3SXdkYi9maWgrVlR2UC9WaWJFcEloNTZ0WHFIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5zakRlM3EvcTNZRVltNGpiVHNSUktNWjJyZmJzYVl4T1hJT245NnltWnREbWZLWnZVdFllUlk0dDRFWjBOclF2QUJMMlNKdWdtVHRSQVBCZU1vL2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiI1YTRFMTZBNTdPeGxhZVJwWThwb2RqU0h3NUxkVm5PakF0NGJXa0QvbSt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4ODUwMTA0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2ODY4OTEwNjhDNkYzQ0UzOUZDRjQ3ODlFRjU4OEVDRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ5ODA2MTUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODg1MDEwNDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzBBREVFMkVBNUQ2MDY5QjlEMjJGQzFEMTkzNkNFQzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTgwNjE1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWjhRNVNFUlYiLCJtZSI6eyJpZCI6IjI1Njc4ODUwMTA0Mjo0N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI0NDQzMDYxOTg2MzA6NDdAbGlkIiwibmFtZSI6IuKCs+KxoOKxoOKCs+KCpiDigrTigrHigrPisaTigq7igrMg8J+kqSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3JCMlBZSEVLYllyOElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMkVSMmpySkNDeTJZZGxrWnUyTS9DdmhRY1VpRUhqLzMraGNqV1BhWVd6VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUnpFelhCQ25JelFBNTMrRDdUaERrbEZKdmloWUJDaW5oZlE2dncrVEpPNXFkalI1R0VMZTFJcnZvWkhKTXI2TXRTcC9SelBtYTBOOUt4ajI2WlBLQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNPRUFBODljUlNUY1llNm9vYzU1NzlTVDlvcTVKSkpmSERPRis0UWdrWGFYb1lLeHVlZ2hiTFpzNStqSmUvdk1tbVZQSmM5bU85Mm5EVDZPc0lYWGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2Nzg4NTAxMDQyOjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRoRWRvNnlRZ3N0bUhaWkdidGpQd3I0VUhGSWhCNC85L29YSTFqMm1GczEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTgwNjEzMiwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDYVYifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "256788501042",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  CHATBOT : process.env.CHATBOT || "yes",
                  AUTO_BIO : process.env.AUTO_BIO || "yes",
                  AUTO_REACT : process.env.AUTO_REACT || "yes",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
