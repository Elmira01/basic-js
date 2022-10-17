 function getSeason(date){
    let month=date.getMonth();
    if(month==undefined){
        return 'Unable to determine the time of year!';
    }
    if(month<0 && month>11){
        return 'Error with message Invalid date!.';
    }
    if (3 <= month && month <= 5) {
        return 'spring';
      }
  
     else if (6 <= month && month <= 8) {
        return 'summer';
      }
  
      else if (9 <= month && month <= 11) {
        return 'autumn';
      }
      else {
        return 'winter';
      }
}
