"use client";

interface RootLayoutProps {
  profileName?: string;
  profileImage?: string;
}

const Profile = ({ profileImage, profileName }: RootLayoutProps) => {
  return (
    <div>
      <div className="flex items-center space-x-3  rounded-lg py-8 px-8 shadow-sm bg-white justify-end border border-gray-300">
        <img
          src={profileImage || "/image.jpg"} // Fallback to default image
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-bold text-black">
          {profileName || "Aditya Sagavekar"}
        </span>{" "}
        {/* Fallback to "Guest" */}
      </div>
    </div>
  );
};

export default Profile;
