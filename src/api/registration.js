// import Api from "./requestApi";

// const setToken = (token) => {
//   localStorage.setItem("token", token);
// };
// export const onSubmit = () => {
 
//       const data2 = {
//         username: "998971234567",
//         password: "4567",
//       };
//       Api.post("/login/", data2).then((response) => {
//         if (response.status === 200) {
//           setToken(response.data.access);
//         }
//       });
      
// }
// export const onSubmit2 = ()=>{
//     const data = {
//         username: "998974565656",
//         first_name: "Cristiano",
//         last_name: "Ronaldo",
//         password: "4567",
//         email: "ronaldo@gmail.com",
//         avatar: null,
//       };
//       Api.post("/user/registration/", data).then((res) => {
//         if (res.status === 200) {
//           console.log(res);
//         }
//       });
// }