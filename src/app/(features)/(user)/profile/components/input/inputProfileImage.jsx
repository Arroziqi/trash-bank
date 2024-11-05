import UserAvatar from "../../../components/userAvatar";
import ElevatedProfileButton from "../button/elevatedProfileButton";
import RingProfileButton from "../button/ringProfileButton";
import LabelInputUserProfile from "../labelInputUserProfile";

export default function InputProfileImage() {
  return (
    <>
      <LabelInputUserProfile text={"Profile Picture"} id={"picture"} />
      <div className="flex items-center gap-[47px]">
        <UserAvatar width={162} height={162} />
        <div className="">
          <div className="flex gap-3">
            <ElevatedProfileButton text={"Change Profile"} />
            <RingProfileButton text={"Delete Profile"} />
          </div>
        </div>
      </div>
    </>
  );
}
