import Image from "next/image";

const Header = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image src="/logo.svg" alt="Logo" width={60} height={60} />
    </div>
  );
};

export default Header;
