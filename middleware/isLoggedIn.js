export default function ({ store, error, redirect  }) {
  if (! store.state.isLoggedIn) {
    store.dispatch("alert/show", {color: "info", message: "Please Login."});
    error({
      message: 'Please Login/Signup First',
      statusCode: 403
    });
    redirect("/login")
  }
}
