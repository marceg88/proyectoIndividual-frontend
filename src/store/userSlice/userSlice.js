import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ReactAPI } from '../../services/conectionAPI';

//* THUNKS
export const signUp = createAsyncThunk(
    'user/signUp',
    (data) => ReactAPI.signUp(data)
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(window.localStorage.getItem('user')) || null,
        signUpState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        }
    },
    reducers: {
        logout(state) {
            state.user = null;
            window.localStorage.clear();
        },
        resetUserMethodsMessage(state, action) {
            state[action.payload].message = '';
            state[action.payload].status = '';
        }
    },
    extraReducers:
        (builder) => {
            builder
                //* Sign Up Method Thunk */
                .addCase(signUp.pending, (state) => {
                    state.signUpState.loading = true;
                    state.signUpState.error = false;
                })
                .addCase(signUp.fulfilled, (state, action) => {
                    state.signUpState.loading = false;
                    state.signUpState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.signUpState.message = 'Este email ya ha sido registrado 😔.';
                        state.signUpState.status = 'Failed';
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.signUpState.message = 'Usuario registrado con éxito. Porfavor revise su email para confirmarlo 😊.';
                        state.signUpState.status = 'OK';
                        return;
                    }
                })
                .addCase(signUp.rejected, (state) => {
                    state.signUpState.loading = false;
                    state.signUpState.error = true;
                })
            }
})

export const { logout, resetUserMethodsMessage } = userSlice.actions;

export const selectSignUpState = (state) => state.user.signUpState;

export default userSlice.reducer;