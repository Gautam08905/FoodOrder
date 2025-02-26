<?php 
include 'connect.php';
session_start();

if(isset($_POST['signUp'])){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($checkEmail);

    if($result->num_rows > 0){
        echo "Email Address Already Exists !";
        echo "<script>alert('Email Address Already Exists!');</script>";
    } else {
        $insertQuery = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

        if($conn->query($insertQuery) === TRUE){
            header("Location: indexLog.php");
        } else {
            echo "Error: " . $conn->error;
        }
    }
}

if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email' and password='$password'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['email']=$row['email'];
        echo "<script>alert('Login successful!!'); window.location.href='home.html';</script>";
        exit();
   }
   else{
    echo "<script>alert('Not Found, Incorrect Email or Password');</script>";
   }

}
?>
