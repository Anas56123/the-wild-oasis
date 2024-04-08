import ClientOnly from "@/utils/ClientOnly";

const Home = () => {
  return (
    <ClientOnly>
      <div>Users</div>
    </ClientOnly>
  );
};

export default Home;
