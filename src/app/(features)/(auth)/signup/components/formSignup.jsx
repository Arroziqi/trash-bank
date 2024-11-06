"use client";

import { useState } from "react";
import Divider from "../../components/divider";
import FormAuthContainer from "../../components/formAuthContainer";
import Heading1 from "../../components/heading1";
import InputCheckbox from "../../components/input/inputCheckbox";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import SubTitle from "../../components/subTitle";

export default function FormSignup() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, phone, password, confirmPassword }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      console.log(data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <FormAuthContainer>
      <div className="text-left">
        <Heading1 text={"Get's started."} />
        <SubTitle
          text={"Already have an account? "}
          href={"/signin"}
          textLink={"Log in"}
        />
      </div>
      <Divider />
      <form action="" className=" flex flex-col gap-6">
        <InputText type={"username"} placeholder={"Username"} />
        <InputText type={"noHandphone"} placeholder={"No Handphone"} />
        <InputText type={"password"} placeholder={"Password"} />
        <InputText type={"password"} placeholder={"Confirm Password"} />
        <br />
        <InputCheckbox
          label={"I agree to platforms Terms of service and Privacy policy"}
          id={"agree"}
        />
        <InputSubmit text={"Sign up!"} />
      </form>
    </FormAuthContainer>
  );
}
