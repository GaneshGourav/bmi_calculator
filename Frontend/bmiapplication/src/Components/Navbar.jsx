import { Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const link = [
    { to: "/", title: "Home" },
    { to: "/bmi_Calculate", title: "YourBMI" },
    { to: "/bmi_History", title: "History" },
    { to: "/login", title: "Login" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          height: "60px",
          alignItems: "center",
          background: "#372C2E",
          color: "white",
        }}
      >
        <Text fontFamily={"cursive"} color={"teal"}>BMI</Text>
        {link.map((el) => (
          <NavLink
            to={el.to}
            key={el.to}
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                color: isActive ? "red" : "white",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            {el.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};
