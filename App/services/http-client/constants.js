const PROD_BASE_URL = "";
<<<<<<< HEAD
const DEV_BASE_URL = "https://7a76e820.ngrok.io/";
=======
const DEV_BASE_URL = "https://b8a33f76.ngrok.io/";
>>>>>>> d11240d0c18c994ed9069be84c05a2ebd6419cd2


// const PROD_BASE_URL = "";
const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
