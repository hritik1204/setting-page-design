import { Button } from "@mui/material";
import React from "react";

const CustomButton = () => {
  return (
    <div className="btn-wrapper">
      <Button
        variant="outlined"
        sx={{
          color: "gray",
          borderColor: "#f5f5f5",
        }}
      >
        Cancel
      </Button>
      <Button variant="contained" sx={{ borderRadius: "8px" }}>
        Save changes
      </Button>
    </div>
  );
};

export default CustomButton;
