import SideNav from "./ui/sidenav";
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <body>
        <div className="flex flex-col w-screen min-h-dvh md:flex-row bg-[#ffd967]">

          <div className="h-30 md:h-screen w-screen md:w-64 bg-blue-300 p-4">
            <SideNav />
          </div>

          <div>
           {children}
          </div>

        </div>
      </body>
    </html>
  );
}
