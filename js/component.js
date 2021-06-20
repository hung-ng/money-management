const component = {};


component.homeScreen = `

<div id="sign-out" class="cursor" > 
Sign-out
</div>
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
                <input type="text" name="firstName" placeholder="First Name">
                <div class="error" id="first-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="Last Name">
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
        <div class="form-action">
            <span>Already have an account? </span>
            <span class="cursor-pointer" id="redirect-to-login">Login</span>
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
            <input type="email" name="email" placeholder="Email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password">
            <div class="error" id="password-error"></div>
        </div>
        
        <!-- xong het phan input -->
        <div class="form-action">
            <span>Don't have an account? </span>
            <span class="cursor-pointer" id="redirect-to-register">Register</span>
        </div>
        <button class="btn" type="submit" id="login-form">
            Login
        </button>
    </form>
</div>
</div>
`

