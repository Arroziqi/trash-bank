import InputProfileImage from "./components/input/inputProfileImage";
import InputTextProfile from "./components/input/inputTextProfile";

export default function UserProfilePage() {
  return (
    <>
      <div className="px-[133px] py-[54px] w-full h-full">
        <form
          action=""
          className="rounded-[10px] border border-[#00000085] shadow w-full h-full py-[31px] px-[56px] flex flex-col gap-6"
        >
          <InputProfileImage />
          <br />
          <InputTextProfile label={"Username"} id={"username"} value={"EUIS"} />
          <InputTextProfile
            label={"No Handphone"}
            id={"noHandphone"}
            value={"086736372"}
          />
          <InputTextProfile
            label={"Alamat"}
            id={"address"}
            value={"Jl. Jalan, Banten, Indonesia"}
          />
        </form>
      </div>
    </>
  );
}
