const getSecondsToday = () => {
    const date = new Date();
  
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
    let diff = date - today; 
    return Math.round(diff / 1000); 
  }
  
  alert( getSecondsToday() );