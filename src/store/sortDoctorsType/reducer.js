import { SORT_DOCTORS } from "../types";

const initialState = {
  categories: [
    {
      name: "Hammasi",
      checked: false,
    },
    {
      name: "Otolaringolog",
      checked: false,
    },
    {
      name: "Ginekolog",
      checked: false,
    },
    {
      name: "Stomatologiya",
      checked: false,
    },
    {
      name: "Jarrohlik",
      checked: false,
    },
    {
      name: "Kardiolog",
      checked: false,
    },
    {
      name: "Pediatr",
      checked: false,
    },
    {
      name: "Nefrolog",
      checked: false,
    },
    {
      name: "Nevropatolog",
      checked: false,
    },
    {
      name: "Genetika",
      checked: false,
    },
    {
      name: "Dermotolog",
      checked: false,
    },
    {
      name: "Yuqumli kasalliklar",
      checked: false,
    },
    {
      name: "Endokrinolog",
      checked: false,
    },
    {
      name: "Gastroenterolog",
      checked: false,
    },
  ],
};

export const sortDoctorsType = (state = initialState, { type, payload }) => {
  switch (type) {
    case SORT_DOCTORS:
      return { ...state, sortDoctors: payload };
    default:
      return state;
  }
};
