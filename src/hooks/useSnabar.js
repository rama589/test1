import { useContext } from "react";

import { SnackarContext } from "../contexts/SnackarContext";

export const useSnackbar = () => useContext
(SnackarContext);
   
