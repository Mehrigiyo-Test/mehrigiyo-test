import requestApi from "../../Servis/api/request";

export const postFavoriteDocId = (id) => requestApi.post(`/user/favorite/doctor/add/${id}/`)