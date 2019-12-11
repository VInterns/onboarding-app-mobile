const PROD_BASE_URL = "";

// const DEV_BASE_URL = "http://35.178.84.177:3000/"; //DON'T DELETE
const DEV_BASE_URL = "https://38be91ac.ngrok.io/"; //DON'T DELETE


// const PROD_BASE_URL = "";
const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";