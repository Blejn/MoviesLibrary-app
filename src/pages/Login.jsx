import React, { useState, useRef } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
const MainMenu = styled.div`
  max-width: 100%;
  max-height: 100vh;
  padding: 0;
  margin: 0;
`;
const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-position: center center;
  overflow: auto;
  object-fit: contain;
  background-image: ${props => props.url};
`;
const BackgroundGradient = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
const Label = styled.label`
  display: block;
  color: white;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
`;
const Signup = styled.div`
  display: block;
  height: 100px;
  width: 100%;
  color: white;
  letter-spacing: 1px;
`;
const Image = styled.img.attrs({
  src: `${"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"}`,
})`
  max-width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  margin-bottom: 4rem;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
`;
const Container = styled.div`
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
const Button = styled.button`
  width: 8rem;
  font-size: 20px;
  height: 3rem;
  background-color: rgb(58, 64, 73);
  border-radius: 10px;
  padding: 5px;
  margin-top: 2rem;
  border: none;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    background-color: rgba(106, 116, 130, 1);
  }
`;
const Email = styled.input`
  display: block;
  height: 50px;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.07);
  color: white;
  margin-top: 8px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
  ::placeholder {
    color: #e5e5e5;
    padding: 5px;

    letter-spacing: 1px;
  }
`;
const SignUpText = styled.p`
  cursor: pointer;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: rgba(106, 116, 130, 1);
  }
`;
const Password = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  color: white;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  ::placeholder {
    color: #e5e5e5;
    padding: 5px;
    letter-spacing: 1px;
  }
`;

export const Login = () => {
  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };
  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  const [loginForm, setLoginForm] = useState(true);
  function formHandler() {
    setLoginForm(!loginForm);
  }
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <MainMenu>
      {/* NAVBAR */}

      <Background
        url={`url(https://oiot.pl/wp-content/uploads/2022/10/netflix.jpg)`}
      >
        <BackgroundGradient>
          <Container>
            <Image />
            <Form>
              <Label>Email</Label>
              <Email ref={emailRef} placeholder="Email" />
              <Label>Password</Label>
              <Password ref={passwordRef} placeholder="Password" />
              <Signup>
                {loginForm ? (
                  <>
                    {" "}
                    You don't have account?
                    <SignUpText onClick={formHandler}>Sign up !</SignUpText>
                  </>
                ) : (
                  <>
                    {" "}
                    You already have account?
                    <SignUpText onClick={formHandler}>Sign in</SignUpText>
                  </>
                )}{" "}
              </Signup>
              {loginForm ? (
                <Button onClick={signIn} type="submit">
                  Sign in
                </Button>
              ) : (
                <Button onClick={register} type="submit">
                  Sign up
                </Button>
              )}
            </Form>
          </Container>
        </BackgroundGradient>
      </Background>
    </MainMenu>
  );
};
