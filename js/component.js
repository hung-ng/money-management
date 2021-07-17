const component = {};

component.registerScreen = `
<div class="register-container">
<div class="aside">
  <div class="header">
    <h1>Money Easy</h1>
  </div>
  <form id="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" placeholder="First name">
        <div class="error" id="first-name-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="text" name="lastName" placeholder="Last name">
        <div class="error" id="last-name-error"></div>
      </div>
    </div>
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email">
      <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password">
      <div class="error" id="password-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="confirmPassword" placeholder="Confirm your password">
      <div class="error" id="confirm-password-error"></div>
    </div>
    <!-- xong het phan input -->
    <button class="btn btn-primary" type="submit">
      Register
    </button>
    <div class="form-action">
      <span class="cursor-pointer" id="redirect-to-login">Already have an account? Login</span>
    </div>
  </form>
</div>
</div>
`


component.loginScreen = `
<div class="login-container">
<div class="aside">
  <div class="header">
    <h1>Money Easy</h1>
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
    <button class="btn btn-primary" type="submit">
      Login
    </button>
    <span class="cursor-pointer" id="forgotPassword">Forgot Password?</span>
    <div class="form-action">
      <span class="cursor-pointer" id="redirect-to-register">Don't have an account? Register</span>
    </div>
  </form>
</div>
</div>
`

component.forgotPassword = `
<div class="forgotPassword-container">
<div class="aside">
  <div class="header">
    <h1>Forgot Password?</h1>
  </div>
  <form id="forgotPassword-form">
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Input your email">
      <div class="error" id="email-error"></div>
    </div>
    <!-- xong het phan input -->
    <button class="btn btn-primary" type="submit">
      Send Verification Email
    </button>
    <span class="cursor-pointer" id="cancel">Cancel</span>
  </form>
</div>
</div>
`


component.homeScreen = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <h1>Balance</h1>
  </div>
</div>
</div>
`;

component.savings = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <div id="adddiv">
      <div class="cursor-pointer" id="redirectToForm"><img src="../img/Plus-Icon.png" height="30px"
            width="30px" /></div>
    </div>
    <h2>Savings</h2>
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
  </div>
</div>
</div>
`

component.savingsForm = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>
  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <h2>Create new Saving</h2>
    <form id="savings-form">
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="text" name="name" placeholder="Saving's name">
        <div class="error" id="name-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="amount"
          placeholder="Amount">
        <div class="error" id="amount-error"></div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button id="redirect-to-savings" class="btn btn-primary">Cancel</button>
    </form>
  </div>
</div>
</div>
`

component.passiveIncome1 = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <div id="adddiv">
      <div class="cursor-pointer" id="redirectToPIForm1"><img src="../img/Plus-Icon.png" height="30px"
            width="30px" /></div>
    </div>
    <h2>Passive Income Increased by Percent</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Starting Amount</th>
          <th scope="col">Rate (%)</th>
          <th scope="col">Start date</th>
          <th scope="col">Total</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="passiveincomeTable1">

      </tbody>
    </table>
  </div>
</div>
</div>
`

component.passiveIncomeForm1 = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <h2>Create new Passive Income Increased by Percent</h2>
    <form id="PIForm1">
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="text" name="name" placeholder="Name">
        <div class="error" id="name-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="amount"
          placeholder="Amount">
        <div class="error" id="amount-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="rate"
          placeholder="Interest Rate (%)">
        <div class="error" id="rate-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" name="date" type="date" id="date" placeholder="Start Date">
        <div class="error" id="date-error"></div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button id="redirect-to-PI1" class="btn btn-primary">Cancel</button>
    </form>
  </div>
</div>
</div>
`

component.passiveIncome2 = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <div id="adddiv">
      <div class="cursor-pointer" id="redirectToPIForm2"><img src="../img/Plus-Icon.png" height="30px"
            width="30px" /></div>
    </div>
    <h2>Passive Income Increased Uniformly</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Start date</th>
          <th scope="col">Total</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="passiveincomeTable2">
      </tbody>
    </table>
  </div>
</div>
</div>
`

component.passiveIncomeForm2 = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <h2>Create new Passive Income Increased Uniformly</h2>
    <form id="PIForm2">
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="text" name="name" placeholder="Name">
        <div class="error" id="name-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="amount"
          placeholder="Amount">
        <div class="error" id="amount-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" name="date" type="date" id="date" placeholder="Start Date">
        <div class="error" id="date-error"></div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button id="redirect-to-PI2" class="btn btn-primary">Cancel</button>
    </form>
  </div>
</div>
</div>
  `

//--------------------------------------------------------------------------------

component.activeExchanges = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <div id="adddiv">
      <div class="cursor-pointer" id="redirectToAEForm"><img src="../img/Plus-Icon.png" height="30px"
          width="30px" /></div>
    </div>
    <h2>Active Exchanges</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
          <th scope="col">
            <div class="btn-group">
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <div class="cursor-pointer">
                  Type
                  <img src="../img/dropdown-icon.png" height="20px" width="20px" />
                </div>
              </div>
              <ul class="dropdown-menu">
                <li><a id="fetchall" class="dropdown-item cursor-pointer">All</a></li>
                <li><a id="fetchincome" class="dropdown-item cursor-pointer">Income</a></li>
                <li><a id="fetchexpense" class="dropdown-item cursor-pointer">Expense</a></li>
              </ul>
            </div>
          </th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="activeExchangesTable">
      </tbody>
    </table>
  </div>
</div>
</div>
`

component.AEForm = `
<div class="wrapper">
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>Money Easy</h3>
  </div>

  <ul class="list-unstyled components">
    <p id="username"></p>
    <li>
      <a id="home">Home</a>
    </li>
    <li>
      <a id="savings">Savings</a>
    </li>
    <li>
      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pasive
        Income</a>
      <ul class="collapse list-unstyled" id="pageSubmenu">
        <li>
          <a id="passiveincome1">By Percent</a>
        </li>
        <li>
          <a id="passiveincome2">Uniform</a>
        </li>
      </ul>
    </li>
    <li>
      <a id="activeexchanges">Active Exchanges</a>
    </li>
    <li>
      <a id="sign-out">Log Out</a>
    </li>
  </ul>
</nav>

<div id="content">
  <div id="display-content">
    <h2>Create New Active Exchanges</h2>
    <form id="AEForm">
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="text" name="name" placeholder="Name">
        <div class="error" id="name-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" type="number" step="0.01" min="0.01" name="amount"
          placeholder="Amount">
        <div class="error" id="amount-error"></div>
      </div>
      <div class="input-wrapper">
        <input class="form-control form-control-lg" name="date" type="date" id="date" placeholder="Date">
        <div class="error" id="date-error"></div>
      </div>
      <select class="form-control form-control-lg" id="type" name="type" form="AEForm" value="Income"
        class="textinput">
        <option value="3">Income</option>
        <option value="4">Expenses</option>
      </select>
      <br>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button id="redirect-to-AE" class="btn btn-primary">Cancel</button>
    </form>
  </div>
</div>
</div>
`

