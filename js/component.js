const component = {};


component.homeScreen = `

<div id="sign-out" class="cursor" > 
Sign-out
</div>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy" >quy</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm"> something coporation </p>
</div>
  <div class="expand" onclick="openNav()"> &plus; </div>


`;

component.registerScreen = `
<div class="register-container">
<div class="aside">
    <div class="header">
        <h1>tên==null</h1>
    </div>
    <form id="register-form">
        <div class="input-name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firstName" placeholder="Pls input your first name">
                <div class="error" id="first-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="Pls input your last name">
                <div class="error" id="last-name-error"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Input your email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Type your Password">
            <div class="error" id="password-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="confirmPassword" placeholder="Confirm your password">
            <div class="error" id="confirm-password-error"></div>
        </div>
        <!-- xong het phan input -->
        <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-login">Already have an account? Login</span>
        </div>
        <button class="btn" type="submit">
            Register
        </button>
    </form>
</div>
</div>
`


component.loginScreen = `
<div class="login-container">
<div class="aside">
    <div class="header">
        <h1>tên==null</h1>
    </div>
    <form id="login-form">
        
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Input your email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Type your Password">
            <div class="error" id="password-error"></div>
        </div>
        
        <!-- xong het phan input -->
        <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-register">Don't have an account? register</span>
        </div>
        <button class="btn" type="submit">
            Login
        </button>
    </form>
</div>
</div>
`

component.quy=`  <button class="btn" id="redierctInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>x</td>
      <td>y</td>
      <td>z</td>
    </tr>
  </tbody>
</table>`
component.thunhap=`  <button class="btn" id="redierctInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>fff
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>x</td>
      <td>y</td>
      <td>z</td>
    </tr>
  </tbody>
</table>`
component.giaodich=`
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<script src="../js/function.js"></script>
<div class="container">
  <div style="display: flex; border-bottom: black solid 5px;">
    <div class="item1" id="c1" style="border-right:solid black 5px ;">chi</div>
    <div class="item1" id="c2">thu</div>
  </div>
  <div style="display: flex;">
    <div class="item2" style="border-right:solid black 5px ;">log</div>
    <div class="item2">log</div>
  </div>
</div>`
component.c1=`<button class="btn" id="redierctInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<div style="width: 100vh;margin-left:200px ; ">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">name</label>
      <input class="form-control form-control-lg" type="text" placeholder="name">
    <div class="form-group">
      <label for="exampleInputEmail1">amount</label>
      <input class="form-control form-control-lg" type="number" placeholder="amount">
    <div class="form-check">
      <label class="form-check-label" for="exampleCheck1">date pls</label>
      <input class="form-control form-control-lg" type="date"  id="exampleCheck1">
      
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>`
component.c2=`<button class="btn" id="redierctInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<div style="width: 100vh;margin-left:200px ; ">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">name</label>
      <input class="form-control form-control-lg" type="text" placeholder="name">
    <div class="form-group">
      <label for="exampleInputEmail1">amount</label>
      <input class="form-control form-control-lg" type="number" placeholder="amount">
    <div class="form-check">
      <label class="form-check-label" for="exampleCheck1">date pls</label>
      <input class="form-control form-control-lg" type="date"  id="exampleCheck1">
      
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>`
component.b1=` <button class="btn" id="redierctInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<div style="width: 100vh;margin-left:200px ; ">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">name</label>
      <input class="form-control form-control-lg" type="text" placeholder="name">
    <div class="form-group">
      <label for="exampleInputEmail1">amount</label>
      <input class="form-control form-control-lg" type="number" placeholder="amount">
    <div class="form-group">
      <label for="exampleInputPassword1">intrest rate</label>
      <input class="form-control form-control-lg" type="number" placeholder="rate">
    </div>
    <div class="form-check">
      <label class="form-check-label" for="exampleCheck1">date pls</label>
      <input class="form-control form-control-lg" type="date"  id="exampleCheck1">
      
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
component.b2=` <button class="btn" id="redierctInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div>blance here</div>
  <div id="quy">trade</div>
  <div id="thunhap">thunhap</div>
  <div id="giaodich">giaodich</div>
  <p class="tm" id="text"> something coporation </p>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<div style="width: 100vh;margin-left:200px ; ">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">name</label>
      <input class="form-control form-control-lg" type="text" placeholder="name">
    <div class="form-group">
      <label for="exampleInputEmail1">amount</label>
      <input class="form-control form-control-lg" type="number" placeholder="amount">
    <div class="form-check">
      <label class="form-check-label" for="exampleCheck1">date pls</label>
      <input class="form-control form-control-lg" type="date"  id="exampleCheck1">
      
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
