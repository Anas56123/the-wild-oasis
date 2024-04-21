import ClientOnly from "@/utils/ClientOnly";

const Home = () => {
  return (
    <ClientOnly>
        <div className="dark:text-slate-50">Settings</div>
    </ClientOnly>
  )
};

export default Home;