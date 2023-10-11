import React, { useState, useEffect } from "react";

const useLS = (key, value) => {
  const [storage, useStorage] = useState(
    JSON.parse(localStorage.getItem(key)) ?? value
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);

  return [storage, useStorage];
};

export default useLS;
