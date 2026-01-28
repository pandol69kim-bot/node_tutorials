const DOMAIN = 'http://localhost:8000';

const REST_COUNTRIES_API_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags,languages';

  
const GET_VISITORS_API_URL = `${DOMAIN}/visitors`;
const GET_REVENUE_API_URL = `${DOMAIN}/revenue`;
const GET_CUSTOMER_API_URL = `${DOMAIN}/customers`;
// ... 추가적인 API URL들을 여기에 정의할 수 있습니다.

export {
    GET_VISITORS_API_URL,
    GET_REVENUE_API_URL,
    REST_COUNTRIES_API_URL,
    GET_CUSTOMER_API_URL
}

