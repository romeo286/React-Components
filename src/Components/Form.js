import React from 'react';
import Formheader from './Formheader';
import Styles from './Form.module.css';
function Form() {
    return (
        <div class={Styles.form}>
          <Formheader/>
            <form class="form-signin">
  <img class="mb-4" src="https://i.pinimg.com/originals/8a/f8/cc/8af8cc85600f9d52cd6f103ab53a6a20.png" alt="" width="72" height="72" />
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me" /> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
</form>
        </div>
        
    )
}

export default Form
