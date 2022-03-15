import { catchResponseError } from "./apiErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DOT_JSON, method } from "../constants";
import axios from "axios";

export const apiThunk = (apiMethod, endpoints, initName, methodName) => {
    switch (apiMethod) {
        case method.get:
            return createAsyncThunk(
                `${initName}/${methodName}`,
                async (_, { rejectWithValue }) => {
                    try {
                        const response = await axios.get(
                            `${process.env.REACT_APP_BASE_API}${endpoints}${DOT_JSON}`
                        );
                        catchResponseError(response);
                        return await response.data;
                    } catch (error) {
                        return rejectWithValue(error.message);
                    }
                }
            );
        case method.post:
            return createAsyncThunk(
                `${initName}/${methodName}`,
                async (body, { rejectWithValue }) => {
                    try {
                        const response = await axios.post(
                            `${process.env.REACT_APP_BASE_API}${endpoints}${DOT_JSON}`,
                            body
                        );
                        catchResponseError(response);
                    } catch (error) {
                        return rejectWithValue(error.message);
                    }
                }
            );
        case method.delete:
            return createAsyncThunk(
                `${initName}/${methodName}`,
                async (id, { rejectWithValue }) => {
                    try {
                        const response = await axios.delete(
                            `${process.env.REACT_APP_BASE_API}${endpoints}/${id}${DOT_JSON}`
                        );
                        catchResponseError(response);
                    } catch (error) {
                        return rejectWithValue(error.message);
                    }
                }
            );
        case method.patch:
            return createAsyncThunk(
                `${initName}/${methodName}`,
                async ({ id, body }, { rejectWithValue }) => {
                    try {
                        const response = await axios.patch(
                            `${process.env.REACT_APP_BASE_API}${endpoints}/${id}${DOT_JSON}`,
                            body
                        );
                        catchResponseError(response);
                    } catch (error) {
                        return rejectWithValue(error.message);
                    }
                }
            );
        default:
            break;
    }
};
