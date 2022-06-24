//Define display Message for api response

import swal from "sweetalert";

export const DISPLAYMESSAGE = {
  insertSuccess: "Data has been successfully inserted",
  createSuccess: "Data has been successfully created",

  updateSuccess: "Data has been successfully updated",

  deleteSuccess: "Data has been successfully deleted",

  error: "Sorry, some error occured",
};

export const displayErrorAlert = (error) => {
  swal(
    "Error",
    `${error ? (error.response ? error.response.data.message : error) : error}`,
    "error"
  );
};
