(function() {

  /**
  * Set cookie
  *
  * @param string cname
  * @param string cvalue
  * @param int exdays
  */
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  /**
  * Read cookie
  *
  * @param string cname
  * @returns {*}
  */
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  /**
  * Creating first-visit cookie
  */
  var cookie = readCookie('first-visit');

  if (cookie != null && cookie == 'first-visit') {

  } else {

  }

  setCookie('first-visit','true', 60);

})();
