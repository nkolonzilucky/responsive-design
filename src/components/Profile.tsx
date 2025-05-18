import Image from "next/image";

export default function Profile({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} width={205} height={181} />
      <p>Jedi Jones</p>
      <p>Role Intern</p>
    </div>
  );
}