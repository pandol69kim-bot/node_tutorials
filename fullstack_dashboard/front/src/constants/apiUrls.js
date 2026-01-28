const DOMAIN = 'http://localhost:8000';

const REST_COUNTRIES_API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,languages';

  
const GET_VISITORS_API_URL = `${DOMAIN}/visitors`;
const GET_REVENUE_API_URL = `${DOMAIN}/revenue`;
const GET_CUSTOMER_API_URL = `${DOMAIN}/customers`;
const GET_TARGET_REALITY_API_URL = `${DOMAIN}/target_reality`;
const GET_TOP_PRODUCTS_API_URL = `${DOMAIN}/top_products`;
// ... 추가적인 API URL들을 여기에 정의할 수 있습니다.

export {
    GET_VISITORS_API_URL,
    GET_REVENUE_API_URL,
    REST_COUNTRIES_API_URL,
    GET_CUSTOMER_API_URL,
    GET_TARGET_REALITY_API_URL,
    GET_TOP_PRODUCTS_API_URL,
}

