import Image from "next/image";

export default function Profile() {
    return (
        <div>
            <Image
                src={'/Jedi Jones.png'}
                alt="Profile picture"
                width={205}
                height={181}
            />
            <p>Jedi Jones</p>
            <p>Role Intern</p>
        </div>
    );
}