import { useState, useEffect } from "react";

const Profile = () => {
  // let fullName = "Mariam Mokhtar";
  // let bio = "I am a queen";
  // let profession = "Full-time sassy queeeeen";
  const [fullName, setFullName] = useState("Ziad");
  const [bio, setBio] = useState("I am a queen");
  const [profession, setProfession] = useState("Full-time sassy queeeen");

  // console.log("initial fullName", fullName);
  useEffect(() => {
    setFullName("Mariam Mokhtar");
    setBio("web developer");
    setProfession("Full-time apple pie");
  }, []);
  return (
    <div className="profile">
      <h1> Home page </h1>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
    </div>
  );
};

export default Profile;
