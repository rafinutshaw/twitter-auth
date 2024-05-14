import Image from "next/image";
import React from "react";

function ProfilePicture({ src }) {
  return (
    <Image alt="user profile picture" src={src} width={240} height={240} />
  );
}

export default ProfilePicture;
