import Image from "next/image";

interface RootLayoutProps {
  profileName?: string;
  profileImage?: string;
}

const Profile = ({ profileImage, profileName }: RootLayoutProps) => {
  return (
    <div>
      <div className="flex items-center space-x-3  rounded-lg py-8 px-8 shadow-sm bg-white justify-end border border-gray-300">
        <Image
          src={profileImage || "/image.jpg"}
          alt="Profile"
          className=" rounded-full"
          width={40}
          height={40}
        />
        <span className="font-bold text-black">
          {profileName || "Aditya Sagavekar"}
        </span>{" "}
      </div>
    </div>
  );
};

export default Profile;
