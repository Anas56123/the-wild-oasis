"use client"
import { useRouter } from "next/navigation";

const Home = () => {
  const route = useRouter();
  route.push('/login')
};

export default Home;
