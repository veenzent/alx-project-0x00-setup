import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Small Rounded Button" styles="text-sm rounded-sm" />
            <Button title="Medium Rounded Button" styles="text-base rounded-md" />
            <Button title="Large Rounded Button" styles="text-xl rounded-full" />
            
            <Button title="Small Rounded Full Button" styles="text-sm rounded-full" />
            <Button title="Medium Rounded Full Button" styles="text-base rounded-full" />
            <Button title="Large Rounded Full Button" styles="text-xl rounded-full" />
        </div>
    );
};
export default Landing;
