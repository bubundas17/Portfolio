export default function ({ store, error, redirect  }) {
  if (store.state.isLoggedIn) {
    store.dispatch("alert/show", {color: "info", message: "You Are Already Logged In."});
    error({
      message: 'You are Logged In',
      statusCode: 403
    });
    redirect("/")
  }
}
