import ClientOnly from "@/utils/ClientOnly";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <ClientOnly>
        <div>
            <p>layout</p>
            {children}
        </div>
    </ClientOnly>
  )
};

export default layout;