import ClientOnly from "@/utils/ClientOnly";

const Home = () => {
  return (
    <ClientOnly>
        <div>Dashboard</div>
    </ClientOnly>
  )
};

export default Home;