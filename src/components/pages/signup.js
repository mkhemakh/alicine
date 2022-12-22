import "../../Styles/signup.css";
function signup() {
  return (
    <div className="signup">
      <h1>SIGNUP</h1>
      <form>
        <div>
          <label htmlFor="email">Email </label>
          <input name="email" type="mail" />
        </div>
        <div>
          <label htmlFor="username">Username </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input name="password" type="password" />
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default signup;