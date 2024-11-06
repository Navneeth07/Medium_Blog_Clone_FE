import { writePost } from "../images";

export const HEADER_VALUES = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Write",
    path: "/new-story",
    icon: writePost,
  },
  {
    id: 3,
    name: "Sign In",
    path: "/authentication",
    type: "button",
  },
];
