import { useContext } from "react";
import { Context } from "../utils/Context";

export const useContextData = () => {
    return useContext(Context);
}