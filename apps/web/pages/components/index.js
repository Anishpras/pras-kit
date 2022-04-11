import Card from "../../components/Components/Card";
import Nav from "../../components/Nav";

const components = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="w-full py-8 flex flex-wrap justify-center items-center gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default components;
