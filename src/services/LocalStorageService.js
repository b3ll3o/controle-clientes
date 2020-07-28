
export default key => ({

  get: () => ( 
    JSON.parse(localStorage.getItem(key))
  ), 

  set: objeto => {
    localStorage.setItem(key, JSON.stringify(objeto));
  }
});