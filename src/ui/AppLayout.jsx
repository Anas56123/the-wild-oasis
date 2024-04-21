import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const styledAppLayout = `
  grid sal h-screen
`;

const main = `
  bg-grey-50 main overflow-scroll
`;

const container = `
  max-w-8xl m-0 flex flex-col container
`;

function AppLayout() {
  return (
    <div className={styledAppLayout}>
      <Header />
      <Sidebar />
      <main className={main}>
        <div className={container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
