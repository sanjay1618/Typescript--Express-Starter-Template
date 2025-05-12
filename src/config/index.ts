//This configuration file contains all the configurations needed for the app server to work. Example processing of the env variables

import dotenv from 'dotenv';

function loadEnv() {
    dotenv.config();
}

loadEnv();

//Defining the type for the serverConfig object

type ServerConfig = {
    PORT : number;
}

export const serverConfig : ServerConfig = {
  PORT : Number(process.env.PORT) || 3000
}