import axios from "axios";
// get users
export const loginUserApi = async (userData) => {
  try {
    let res = await axios.post(
      `https://agreeable-calf-coat.cyclic.cloud/user/login`,
      userData
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
//get otp verify from login
export const loginOtpApi = async (userData) => {
  console.log("userData:LOGIN", userData);
  try {
    let res = await axios.post(
      `https://agreeable-calf-coat.cyclic.cloud/user/verify-login`,
      userData
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// new user
export const addNewUserApi = async (userData) => {
  console.log("userData", userData);
  try {
    let res = await axios.post(
      `https://agreeable-calf-coat.cyclic.cloud/user/register`,
      userData
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

//get otp verify from signup
export const getOtp = async (userData) => {
  try {
    let res = await axios.post(
      `https://agreeable-calf-coat.cyclic.cloud/user/verify-register`,
      userData
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// update Adhar Front
export const adharFrontApi = async (token, frontAdhar) => {
  try {
    const formData = new FormData();
    formData.append("aadharfront", frontAdhar);
    console.log("Formdata:-", formData.get("aadharfront"));
    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // Essential for sending files
        Authorization: `Bearer ${token}`,
      },
    };

    let res = await axios.post(
      `https://agreeable-calf-coat.cyclic.cloud/user/upload/aadharfront`,
      formData,
      config
    );
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const adharBackApi = async (token, backAdhar) => {
  try {
    const formData = new FormData();
    formData.append("aadharback", backAdhar);
    // console.log(backAdhar,formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // Essential for sending files
        Authorization: `Bearer ${token}`,
      },
    };

    let res = await axios.post(
      `https://agreeable-calf-coat.cyclic.cloud/user/upload/aadharback`,
      formData,
      config
    );
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//Course Applied

export const courseAppliedGet = async (token,userID) => {
  // console.log('userID:', userID)
  // console.log('token:', token)
  try {
    let res = await axios.get(
      `https://agreeable-calf-coat.cyclic.cloud/course-applied`,userID,{
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
    return res;
  } catch (err) {
    console.log(err);
  }
};