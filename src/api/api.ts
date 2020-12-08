import axios from "axios";
import { IPlant } from "../reducers/plantsReducers";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

export async function getPlants(): Promise<{
  plants: IPlant[];
  isError: boolean;
}> {
  try {
    return {
      plants: tempPlants,
      isError: false,
    };
    /*const response = await instance.get("/candidates?url=" + url);
    return {
      ...response.data,
      isError: false,
    };*/
  } catch (error) {
    console.log("Error", error);
    return {
      plants: [],
      isError: true,
    };
  }
}

const tempPlants: IPlant[] = [
  {
    name: "Harry",
    type: "Mexican Fortune Tree",
    images: ["/images/plant1.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "3 days",
      nourish: "4 days",
      replant: "1 month",
    },
  },
  {
    name: "Kawaii",
    type: "Mexican Fortune Tree",
    images: ["/images/plant2.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Malin",
    type: "Rose",
    images: ["/images/roses2.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Rut",
    type: "Aloevera",
    images: ["/images/aloe1.jpg"],
    information:
      "Aloevera is known for all the good things it can bring your body, but to be honest we think it also deserves somee credits for its sharp but at the same time gentle looks. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Gun",
    type: "Carnation",
    images: ["/images/flowerontable1.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SHADOW",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Hilda",
    type: "Mexican Fortune Tree",
    images: ["/images/greenfond.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SHADOW",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Vickan",
    type: "Mexican Fortune Tree",
    images: ["/images/planbt5.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Göran",
    type: "Mexican Fortune Tree",
    images: ["/images/plant3.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SHADOW",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Gerd",
    type: "Mexican Fortune Tree",
    images: ["/images/plant4.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Hilda",
    type: "Mexican Fortune Tree",
    images: ["/images/plant6.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },

  {
    name: "Karen",
    type: "Mexican Fortune Tree",
    images: ["/images/plant8.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
  {
    name: "Olof",
    type: "Mexican Fortune Tree",
    images: ["/images/plant9.jpg"],
    information:
      "Mexican fortune tree, braided money tree, guiana chestnut and malbar chestnut are just a few of the names that is used for the Pachira aquatica. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    livingConditions: {
      degrees: "21-25 degrees celsuis is just perfect",
      place: "SUN",
      placeText: "I like it boiling hot",
    },
    actions: {
      water: "30 days",
      nourish: "4 days",
      replant: "4 month",
    },
  },
];
