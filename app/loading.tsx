import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Image src={loader} width={150} height={150} alt="loading" />
    </div>
  );
};

export default LoadingPage;
