import { Box } from "@mui/material";
// @ts-ignore
import photo from "../../../assets/profile.png";

const Profile = () => {
  return (
    <Box
      component="img"
      src={photo}
      alt="Logo"
      sx={{
        height: {xs:120,md:170},
        borderRadius: 9,
        // boxShadow: "inset 0 4px 10px rgba(0,0,0,0.6)",
      }}
    />
  );
};

export default Profile;
