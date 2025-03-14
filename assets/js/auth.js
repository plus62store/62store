firebase.auth().onAuthStateChanged(user => {
  const protectedPages = [
    "{{site.baseurl}}/LoggedIn",
    "{{site.baseurl}}/akun",
    "{{site.baseurl}}/product/"
  ];

  if (!user && protectedPages.includes(window.location.pathname)) {
    window.location.href = "{{site.baseurl}}/";
  }
});