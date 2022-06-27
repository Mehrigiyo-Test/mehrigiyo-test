import requestApi from "../../Servis/api/request";


export const getFavoriteDoc = () => requestApi.get("/user/favorite/doctors/")