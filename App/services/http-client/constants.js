const PROD_BASE_URL = "";

// const DEV_BASE_URL = "https://6bb22b13.ngrok.io/";
const DEV_BASE_URL = "https://107bc269.ngrok.io/";


// const PROD_BASE_URL = "";
const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";