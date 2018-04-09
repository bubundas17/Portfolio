export default function ({ store, error, redirect  }) {
  if (! store.state.user.isAdmin) {
    store.dispatch("alert/show", {color: "error", message: "you Don't Have Permission To Do So."});
    error({
      message: 'you Don\'t Have Permission To Do So.',
      statusCode: 403
    });
    redirect("/login")
  }
}
