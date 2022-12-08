import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
export const useCitiesFormOpen = () => {
  const [isCitiesForm, setIsCitiesFrom] = useState(false);
  const handleOpen = () => {
    setIsCitiesFrom(!isCitiesForm);
  };
  const handleClose = () => {
    setIsCitiesFrom(false);
  };
  const ref = useRef(null);
  useOnClickOutside(ref, handleClose);

  return { isCitiesForm, handleOpen, ref };
};
