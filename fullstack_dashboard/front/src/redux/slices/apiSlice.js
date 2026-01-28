import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_VISITORS_API_URL, GET_REVENUE_API_URL, GET_CUSTOMER_API_URL, GET_TARGET_REALITY_API_URL, GET_TOP_PRODUCTS_API_URL } from "../../constants/apiUrls";
import { getRequest } from "../../constants/requestMethods";

// 공통된 비동기 액션 생성 로직을 별도의 함수로 분리
const createFetchThunk = (actionType, apiUrl) => {
    return createAsyncThunk(actionType, async () => {
        return await getRequest(apiUrl);
    })
};

// Get Visitors
export const fetchVisitors = createFetchThunk('fetchVisitors', GET_VISITORS_API_URL);

// Get Revenue
export const fetchRevenue = createFetchThunk('fetchRevenue', GET_REVENUE_API_URL);

// Get Customers
export const fetchCustomer = createFetchThunk('fetchCustomer', GET_CUSTOMER_API_URL);

// Get TargetReality
export const fetchTargetReality = createFetchThunk('fetchTargetReality', GET_TARGET_REALITY_API_URL);

// Get Top product
export const fetchTopProducts = createFetchThunk('fetchTopProducts', GET_TOP_PRODUCTS_API_URL);

const handleFulfilled = (stateKey) => (state, action) => {
    state[stateKey] = action.payload;
}  // 이중 화살표 함수

const handleRejected = (state, action) => {
    console.log('Error', action.payload)
    state.isError = true
}

const apisSlice = createSlice({
    name: 'apis',
    initialState: {
        visitorsData: null,
        revenueData: null,
        customerData: null,
        targetRealityData: null,
        topProductsData: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchVisitors.fulfilled, handleFulfilled('visitorsData'))
        .addCase(fetchVisitors.rejected, handleRejected)

        .addCase(fetchRevenue.fulfilled, handleFulfilled('revenueData'))
        .addCase(fetchRevenue.rejected, handleRejected)

        .addCase(fetchCustomer.fulfilled, handleFulfilled('customerData'))
        .addCase(fetchCustomer.rejected, handleRejected)

        .addCase(fetchTargetReality.fulfilled, handleFulfilled('targetRealityData'))
        .addCase(fetchTargetReality.rejected, handleRejected)

        .addCase(fetchTopProducts.fulfilled, handleFulfilled('topProductsData'))
        .addCase(fetchTopProducts.rejected, handleRejected)
    }
});

export default apisSlice