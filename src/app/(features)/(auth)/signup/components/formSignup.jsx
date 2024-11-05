import Divider from "../../components/divider";
import FormAuthContainer from "../../components/formAuthContainer";
import Heading1 from "../../components/heading1";
import InputCheckbox from "../../components/input/inputCheckbox";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import Logo from "../../components/logo";
import SubTitle from "../../components/subTitle";

export default function FormSignup() {
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
