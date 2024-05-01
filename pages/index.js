import Image from "next/image";
import Style from "@/styles/main.module.scss";

export default function Home() {
  return (
    <>
      <div>
        <Image
        priority= {true}
          fetchPriority = 'high'
          src='/a.jpg'
          alt="Picture of the author"
          width={1440}
          height={500}
          className={Style['slider']}
        />
      </div>
      <div>
        
      </div>
    </>
  );
}
