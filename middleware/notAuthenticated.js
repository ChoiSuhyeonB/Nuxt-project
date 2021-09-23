const jwt = require("jsonwebtoken");

export default function({ store, redirect }) {
  if (store.state.auth) {
    return redirect("/movie");
  }
}
