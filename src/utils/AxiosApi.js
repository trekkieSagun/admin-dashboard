import axios from "axios";
import swal from "sweetalert";
import { serverLocation, headers, loginUrl } from "./Constants";
import history from "./History";

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config;
//     //log out if refresh token fetch is unsuccessfull by status 500
//     if (
//       error.response &&
//       error.response.status === 500 &&
//       originalRequest.url === `${serverLocation}/refreshToken`
//     ) {
//       localStorage.clear();
//       history.push(`${process.env.PUBLIC_URL}/`);
//       return Promise.reject(error);
//     }

//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       return axios
//         .post(`${serverLocation}/refreshToken`, {}, refreshHeaders)
//         .then((res) => {
//           if (res.status === 200) {
//             localStorage.setItem("token", res.data.access_token);
//             localStorage.setItem("refreshToken", res.data.refresh_token);
//             axios.defaults.headers.common["Authorization"] =
//               "Bearer " + localStorage.getItem("token");
//             return axios(originalRequest);
//           } else {
//             localStorage.clear();
//             history.push("/");
//           }
//         })
//         .catch((err) => {
//           localStorage.clear();
//           history.push("/");
//         });
//     }
//     return Promise.reject(error);
//   }
// );

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const refresh_token = localStorage.getItem("refreshToken");
    if (token) {
      if (config.url === `${serverLocation}/refreshToken`) {
        config.headers["refresh_token"] = refresh_token;
        config.headers["Authorization"] = null;
      } else {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

let refreshHeaders = {
  headers: {
    refresh_token: `${localStorage.getItem("refreshToken")}`,
  },
};

const thenCatchPost = (doPost, successCallback, failureCallback) => {
  doPost
    .then(
      successCallback ||
        function (response) {
          swal("Success", response.message ? response.message : "Success", "");
        }
    )
    .catch(
      failureCallback ||
        function (error) {
          let errorResponse = error.response ? error.response.data : error;
          if (errorResponse.status === 400) {
            //if condition to check spring boot validation errors
            let errorMessage = "";
            if (errorResponse.errors) {
              errorResponse.errors.forEach((error) => {
                errorMessage += `${error.field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, function (str) {
                    return str.toUpperCase();
                  })} ${error.defaultMessage} \n`; //ishan
              });
              swal(errorResponse.error, errorMessage, "");
            } else {
              swal(errorResponse.error, errorResponse.message, "");
            }
          } else {
            swal(
              errorResponse.error || "Network Error",
              errorResponse.message
                ? errorResponse.message
                : "Could Not Connect To The Server.",
              ""
            );
          }
        }
    );
};

const thenCatchGet = (doGet, successCallback, failureCallback) => {
  doGet
    .then(
      successCallback ||
        function (response) {
          alert(response.data);
        }
    )
    .catch(
      failureCallback ||
        function (error) {
          alert(error.message);
        }
    );
};

export const axiosGet = (url, successCallback, failureCallback) => {
  let doGet = axios.get(url, { headers });
  thenCatchGet(doGet, successCallback, failureCallback);
};

export const axiosPost = (url, params, successCallback, failureCallback) => {
  let doPost =
    url === loginUrl
      ? axios.post(url, params)
      : axios.post(url, params, { headers });
  thenCatchPost(doPost, successCallback, failureCallback);
};

export const axiosPut = (url, params, successCallback, failureCallback) => {
  let doPost = axios.put(url, params, { headers });
  thenCatchPost(doPost, successCallback, failureCallback);
};

export const axiosDelete = (url, successCallback, failureCallback) => {
  let doPost = axios.delete(url, { headers });
  thenCatchPost(doPost, successCallback, failureCallback);
};
