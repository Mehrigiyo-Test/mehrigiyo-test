import requestApi from "../../Servis/api/request";

export const deleteFavoriteDocId = (id) => requestApi.delete(`/user/favorite/doctor/add/${id}/`)

