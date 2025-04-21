const getDate = (): number => {
  const d = new Date();
  const fullYear: number = d.getFullYear();

  return fullYear;
};

export default getDate;
