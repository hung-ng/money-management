const component = {};

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
            <span class="cursor-pointer" id="redirect-to-register">Don't have an account? Register</span>
        </div>
        <button class="btn" type="submit">
            Login
        </button>
    </form>
</div>
</div>
`

component.homeScreen = `
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
</div>
  <div class="expand" onclick="openNav()"> &plus; </div>
  <table>
  <thead>
    <tr>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody id="balanceTable">
  </tbody>
</table>
`;

component.savings = `  <button class="btn" id="redirectToForm"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody id="savingsTable">
  </tbody>
</table>
`

component.savingsForm = `
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<div style="width: 100vh;margin-left:200px ; ">
  <form id ="savings-form">
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input class="form-control form-control-lg" type="text" name="name" placeholder="Saving's name">
    <div class="form-group">
      <label for="exampleInputEmail1">Amount</label>
      <input class="form-control form-control-lg" id="exampleInputEmail1" type="number" step="0.01" min="0.01" name="amount" placeholder="Amount">
    <button type="submit" class="btn btn-primary">Submit</button>
    <button id="redirect-to-savings" class="btn btn-primary">Cancel</button>
  </form>`

component.passiveIncome = `  <button class="btn" id="redirectToPIForm1"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Starting Amount</th>
      <th scope="col">Rate</th>
      <th scope="col">Start date</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody id="passiveincomeTable1">
  </tbody>
</table>`

component.passiveIncomeForm1 = ` <button class="btn" id="redirectInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
<div style="width: 100vh;margin-left:200px ; ">
  <form id="PIForm1">
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input class="form-control form-control-lg" type="text" name="name" placeholder="Name">
    <div class="form-group">
      <label for="exampleInputEmail1">Starting Amount</label>
      <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="amount" placeholder="Amount">
      <div class="form-group">
      <label for="exampleInputEmail1">Interest Rate</label>
      <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="rate" placeholder="Interest Rate">  
      <div class="form-group">
      <label for="date">Start Date</label>
      <input class="form-control form-control-lg" name="date" type="date"  id="date"> 
    <button type="submit" class="btn btn-primary">Submit</button>
    <button id="redirect-to-PI1" class="btn btn-primary">Cancel</button>
  </form>`

  //--------------------------------------------------------------------------------

component.activeExchanges = `
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
</div>
<div class="expand" onclick="openNav()"> &plus; </div>
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

component.c1 = `<button class="btn" id="redirectInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
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

component.c2 = `<button class="btn" id="redirectInfo"> redirect </button>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&minus;</a>
  <div id ="home">Home</div>
  <div id="savings" >Savings</div>
  <div id="passiveincome">Passive Income</div>
  <div id="activeexchanges">Active Exchanges</div>
  <div id="sign-out" class="cursor" >Sign out</div>
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

