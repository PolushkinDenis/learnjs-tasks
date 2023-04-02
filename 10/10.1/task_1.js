const error = () => {
    try {
      alert('начало');
      throw new Error("ошибка");
    } catch (e) {
      // ...
      if("не могу обработать ошибку") {
        throw e;
      }
  
    } finally {
      alert('очистка!')
    }
  }
  
  error();