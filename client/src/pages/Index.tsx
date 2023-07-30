import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <section className="bg-black flex justify-center items-center py-72 overflow-hidden ">
      <div className="w-96 text-justify">
        <h1 className="font-gloock text-4xl text-[#D6D6D6]">
          Attendance Application
        </h1>
        <p className="text-[#D6D6D6] text-lg">
          An attendance solution that you need for all your next class. Mark
          Student's attendance in One click using our app.
        </p>
        <a href="http://localhost:5173/auth">
          <Button className="bg-[#EBEBEB] w-96 hover:bg-white">
            <span className="text-black">Click here to Login</span>
          </Button>
        </a>
      </div>
      <img
        src="https://source.unsplash.com/G5HkBfwOths"
        alt=""
        width="200px"
        height="600px"
        className="grayscale ml-12"
      />
    </section>
  );
};
export default Index;
