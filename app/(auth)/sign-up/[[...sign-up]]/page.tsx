import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 14,
            textTransform: "none",
            backgroundColor: "#181818",
            "&:hover, &:focus, &:active": {
              backgroundColor: "#212121",
            },
          },
        },
      }}
    />
  );
}
