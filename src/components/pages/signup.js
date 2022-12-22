const signup = () => {

return (
    <>
      <label>SIGNUP</label>
      <div>
        <form>
          <label htmlFor="email">Email: </label>
          <input name="email" type="mail"/>
          <label htmlFor="username">Username: </label>
          <input name="username" type="text"/>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
    )
}