import Image from "next/image";
import Logo from "../../components/logo";
import Color from "../../const/theme";
import HeroAuthContainer from "../../components/hero";

export default function HeroSignin() {
  return (
    <HeroAuthContainer>
      <Logo />
      <div className="text-center">
        <h1 className="font-extrabold text-[36px]">
          SELAMAT DATANG DI BANK SAMPAH!
        </h1>
        <p className="font-extrabold text-[20px]" style={{ color: Color.grey }}>
          Ubah barang tidak terpakai menjadi sesuatu yang lebih berharga
        </p>
      </div>
      <Image
        className="mx-auto mb-10"
        src="/img/auth/hero.png"
        alt="Signin"
        width={682}
        height={482}
      />
    </HeroAuthContainer>
  );
}
