import CustomButton from "./bntCreation";

const Home = () => {
    return (
        <div>
          <CustomButton onClick={handleClick} label="Click Me" />
        </div>
      );
}

export default Home;