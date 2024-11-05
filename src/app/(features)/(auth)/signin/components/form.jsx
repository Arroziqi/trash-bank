import Divider from "../../components/divider";
import FormAuthContainer from "../../components/formAuthContainer";
import Heading1 from "../../components/heading1";
import InputCheckbox from "../../components/input/inputCheckbox";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import SubTitle from "../../components/subTitle";
import Color from "../../const/theme";

export default function FormSignin() {
  return (
    <FormAuthContainer>
      <div className="text-left">
        <Heading1 text={"Login."} />
        <SubTitle
          text={"Don't have an account? "}
          href={"/signup"}
          textLink={"Sign up"}
        />
      </div>
      <Divider />
      <form action="" className=" flex flex-col gap-6">
        <InputText type={"username"} placeholder={"Username"} />
        <InputText type={"password"} placeholder={"Password"} />
        <InputCheckbox label={"Remember me"} id={"remember"} />
        <InputSubmit text={"Login"} />
      </form>
    </FormAuthContainer>
  );
}
