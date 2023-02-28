import signupPicture from "../assets/figma1.jpeg";

const SignInImage = ({type}) => {
  return (
    <div className="col-start-4 col-span-3 rounded-lg  brightness-90 contrast-75">
      <img
        src={signupPicture}
        style={{
          height:type==="login"? "300px":"400px",
          width: "600px",
          borderTopRightRadius: "2%",
          borderBottomRightRadius: "2%",
        }}
        alt="signUp"
      />
    </div>
  );
};

export default SignInImage;
