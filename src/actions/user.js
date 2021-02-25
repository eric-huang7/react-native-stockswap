import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  EDITUSER_START,
  EDITUSER_SUCCESS,
  EDITUSER_ERROR,
  PROFILEPOST_START,
  PROFILEPOST_SUCCESS,
  PROFILEPOST_ERROR,
} from 'constants';
import axios from 'axios';
import deviceStorage from '../components/screens/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';

import Toast from 'react-native-toast-message';

export const Register = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      .post('https://jiujitsux.herokuapp.com/api/users/register', input)


    .then(response =>{ dispatch({ type: SIGNUP_SUCCESS, payload: response.data }); 
    navigate('ProfileInfoForm');
        Toast.show({
          type: 'success',
          text2: 'Sign up successful!',
        });
      })

      .catch((error) => {
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        Toast.show({
          type: 'error',
          text2: 'Error signing up.',
        });
      });
  };
};

export const RegisterGoogle = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      .post('https://jiujitsux.herokuapp.com/api/users/register', input)


    .then(response =>{ dispatch({ type: SIGNUP_SUCCESS, payload: response.data }); 
    navigate('ProfileInfoForm');
    Toast.show({
          type: 'success',
          text2: 'Sign up successful!',
        });      
})

      .catch((error) => {
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        Toast.show({
          type: 'error',
          text2: 'Error signing up.',
        });
      });
  };
};
// export const Register = (form) => (dispatch) => {
//   return dispatch({
//     type:SIGNUP_SUCCESS, payload: form
//   });
// };

//Working POST with token sent on headers

// export const Login = (input) => {
//   return (dispatch) => {
//     dispatch({type: LOGIN_START});
//     apiInstance
//             .post('https://jiujitsux.herokuapp.com/api/moves/takedown', (input))
//             .then((response) => {
//                 console.log(response, 'TAKEDOWN response')
//                 // window.location.reload();
//             })
//         // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: LOGIN_SUCCESS, payload: response.data })

// .catch(error => {dispatch({ type: SIGNUP_ERROR, payload: error.response })
// console.log(error.response )

// })
//   };
// };

//Ready for hookup Login

export const Login = (input) => {
  return (dispatch) => {
    dispatch({type: LOGIN_START});
    axios
      .post('https://jiujitsux.herokuapp.com/api/users/login', input)
      // .then((response) => {
      //     console.log(response, 'response')
      // })
      .then((response) => {
        deviceStorage.saveItem('token', response.data.token),
          dispatch({type: LOGIN_SUCCESS, payload: response.data});
        // Toast.show({
        //   type:'success',
        //   text1: 'You have been logged in',
        // });
      })

      .catch((error) => {
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Incorrect email or password.',
        });
      });
  };
};

// export const Login = () => (dispatch) => {
//   return dispatch({
//     type: LOGIN_SUCCESS,
//   });
// };

// export const Logout = () => (dispatch) => {
//   return dispatch({
//     type: LOGOUT,
//   });
// };

export const Logout = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT});
    Toast.show({
      type:'success',
      topOffset: 30,
      text2: 'You have been successfully logged out.',
      
    });
  }}
  
  export const EditUser = (input) => {
    return (dispatch) => {
      dispatch({type: EDITUSER_START});
      apiInstance        
              .put(`https://jiujitsux.herokuapp.com/api/moves/takedown/${input.id}`, (input))
              .then((response) => {
                  console.log(response, 'TAKEDOWN edit response')
                  Toast.show({
                    type: 'success',
                    text2: 'Profile updated successfully!',
                  });               
              })
          // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: EDITUSER_SUCCESS, payload: response.data })     
                   
   .catch(error => {dispatch({ type: EDITUSER_ERROR, payload: error.response })
  console.log(error.response )
  Toast.show({
    type: 'error',
    text2: 'Error updating profile.',
  });
   
  })
    };
  };

export const ProfilePost = (input) => {
  return (dispatch) => {
    dispatch({type: PROFILEPOST_START});
    axios
      .post('https://jiujitsux.herokuapp.com/api/users/register', input)


    .then(response =>{ dispatch({ type: PROFILEPOST_SUCCESS, payload: response.data }); 
    // navigate('Login')
      })

      .catch((error) => {
        dispatch({type: PROFILEPOST_ERROR, payload: error.response});
        alert('Error creating profile');
      });
  };
};
