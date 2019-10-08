const PROD_BASE_URL = "";

// const DEV_BASE_URL = "https://66b0bf91.ngrok.io/";

const DEV_BASE_URL = "https://49ae283e.ngrok.io/";

// const PROD_BASE_URL = "";
const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";