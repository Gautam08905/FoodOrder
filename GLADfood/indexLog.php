<!DOCTYPE html>
<html lang="en" ng-app="FoodApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="styleLog.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js"></script>
    <script src="appLog.js"></script>
</head>
<body>
    <div class="form-container">
        <div class="login-container" id="reg" style="display:none;">
            <div class="login-header">
                <img src="assets/logo.png" alt="Logo" class="logoLog">
                <h1 class='logHead'>GLAD</h1>
                <p class="pCol">FOOD CORNER</p>
            </div>
            <h1 class="form-title logHead">Register</h1>
            <form method="post" action="register.php">
                <div class="input-group">
                    <i class="fas fa-user"></i>
                     <label class="sameLabel" for="username">Username</label>
                     <input class="sameInp" type="text" name="username" id="username" ng-model="username" placeholder="User  Name" required>
                </div>
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                     <label class="sameLabel" for="register-email">Email</label>
                     <input class="sameInp" type="text" id="email" name="email" ng-model="user.email" placeholder="Email" required ng-keyup="validateEmail()">
                    <p class="error" ng-show="emailError">@ is missing in email</p>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                     <label class="sameLabel" for="register-password">Password</label>
                     <input class="sameInp" type="password" name="password" id="password" ng-model="user.password" placeholder="Password" required ng-keyup="validatePassword()">
                    <p class="error" ng-show="passwordError">Password must be at least 8 characters</p>
                </div>
                <div class="button-group">
                    <button type="submit" class="btn1" value="signUp" ng-disabled="emailError || passwordError" name="signUp">Register</button>
                    <p class="p1 pCol">Already Have Account?<a href="" id="loginButton" class="btn">Login</a></p>
                    <!-- <button id="loginButton" class="btn">login</button> -->
                </div>
            </form>
            <br>
        </div>

        <div class="login-container" ng-controller="LoginController" id="log">
            <div class="login-header">
                <img src="assets/logo.png" alt="Logo" class="logoLog">
                <h1 class='logHead'>GLAD</h1>
                <p class="pCol">FOOD CORNER</p>
            </div>
            <div class="catchy-phrase">
                <p class="pCol">{{ phrase }}</p>
            </div><br>
            <h1 class="form-title logHead">Login</h1>
            <form method="post" action="register.php" >
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                     <label class="sameLabel" for="login-email">Email</label>
                     <input class="sameInp" type="text" id="email" name="email" ng-model="user.email" placeholder="Email" required ng-keyup="validateEmail()">
                    <p class="error" ng-show="emailError">@ is missing in email</p>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                     <label class="sameLabel" for="login-password">Password</label>
                     <input class="sameInp" type="password" name="password" id="password" ng-model="user.password" placeholder="Password" required ng-keyup="validatePassword()">
                    <p class="error" ng-show="passwordError">Password must be at least 8 characters</p>
                </div>
                <p class="recover">
                    <a href="#">Recover Password</a>
                </p>
                <div class="button1-group">
                    <button type="submit" class="btn1" value="signIn" ng-disabled="emailError || passwordError" name="signIn">Login</button>
                    <p class="p1 pCol">dont have account...?<a href="" id="registerButton" class="btn2">Register</a></p>
                    
                </div>
            </form>
            <p class="description">Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep.</p>
        </div>
    </div>
    <script defer src="scriptLog.js"></script>
</body>
</html>
